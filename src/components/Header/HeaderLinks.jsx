import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    notificationButtonOpen: false,
    profileButtonOpen: false
  };
  handleToggle = (event, button) => {
    if(button == "notificationButton"){
      this.setState(state => ({ ...state.profileButtonOpen, notificationButtonOpen: !state.notificationButtonOpen }));
    }
    else
    {
      this.setState(state => ({ ...state.notificationButtonOpen, profileButtonOpen: !state.profileButtonOpen }));
    }
  };

  handleClose = (event, button) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    if(button.id == "notificationButton"){
      this.setState(state => ({ ...state.profileButtonOpen, notificationButtonOpen: !state.notificationButtonOpen }));
    }
    else
    {
      this.setState(state => ({...state.notificationButtonOpen,  profileButtonOpen: !state.profileButtonOpen }));
    }
  };

  render() {
    const { classes, handleLogOut } = this.props;
    const { notificationButtonOpen, profileButtonOpen } = this.state;
    return (
      <div>
        <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{
              className: classes.margin + " " + classes.search
            }}
            inputProps={{
              placeholder: "Search",
              inputProps: {
                "aria-label": "Search"
              }
            }}
          />
          <Button color="white" aria-label="edit" justIcon round>
            <Search />
          </Button>
        </div>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Dashboard"
          className={classes.buttonLink}
        >
          <Dashboard className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Dashboard</p>
          </Hidden>
        </Button>
        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={notificationButtonOpen ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={(e) => {this.handleToggle(e, "notificationButton")}}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <p onClick={this.handleClick} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={notificationButtonOpen}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !notificationButtonOpen }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                    <MenuList role="menu">
                      <MenuItem
                        className={classes.dropdownItem}
                      >
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem
                        className={classes.dropdownItem}
                      >
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem
                        className={classes.dropdownItem}
                      >
                        You're now friend with Andrew
                      </MenuItem>
                      <MenuItem
                        className={classes.dropdownItem}
                      >
                        Another Notification
                      </MenuItem>
                      <MenuItem
                        className={classes.dropdownItem}
                      >
                        Another One
                      </MenuItem>
                    </MenuList>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
        <div className={classes.manager}>       
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={profileButtonOpen ? "menu-list-grow2" : null}
            aria-haspopup="true"
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-label="Person"
            className={classes.buttonLink}
            onClick={(e) => {this.handleToggle(e, "profileButton")}}
          >
            <Person className={classes.icons} />
            <Hidden mdUp implementation="css">
              <p className={classes.linkText}>Profile</p>
            </Hidden>
          </Button>
          <Poppers
            open={profileButtonOpen}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !profileButtonOpen }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow2"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                    <MenuList role="menu">                      
                      <MenuItem
                        onClick={handleLogOut}
                        className={classes.dropdownItem}
                      >
                        Logout
                      </MenuItem>                  
                    </MenuList>
                </Paper>
              </Grow>
            )}
          </Poppers>    
         </div>      
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
