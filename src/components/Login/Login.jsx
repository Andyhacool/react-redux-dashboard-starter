import React from 'react';
import {loginActions}  from 'modules/Auth/authentication';
import { connect } from 'react-redux';
import LoginPage from 'views/Login/LoginPage'
import loginPageStyle from "assets/jss/material-dashboard-react/views/loginPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

class Login extends React.Component {
    constructor(props) {
        super(props);
            // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden",
            username: '',
            password: '',
            submitted: false,
            tempPasswordHidden: false
        };
        console.log(this.state);
        // reset login status
        loginActions.logout();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;

        const {dispatch} = this.props;
        if (username && password) {
            dispatch(loginActions.login(username, password));
        }
    }

    componentDidMount() {
        setTimeout(
          function() {
            this.setState({ tempPasswordHidden: true });
          }.bind(this),
          8000
        );
      }

    render() {    
        const { username, password, submitted, cardAnimation,tempPasswordHidden} = this.state;
        var {loggingIn, classes} = this.props;
        return (
            <LoginPage 
                classes ={classes}
                cardAnimation ={cardAnimation} 
                loggingIn = {loggingIn} 
                username= {username}
                password= {password} 
                submitted= {submitted}
                tempPasswordHidden = {tempPasswordHidden}
                handleChange ={this.handleChange} 
                handleSubmit = {this.handleSubmit}
            />
        );
    }
}

function mapStateToProps(state) {
    const loggingIn  = state.auth.get('loggingIn');
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(withStyles(loginPageStyle)(Login));
export  { connectedLoginPage as Login }; 