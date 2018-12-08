import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from "helpers";
import * as alertActions  from "modules/Alert/alert"
import Layout from "layout/Layout/Layout.jsx";
import  {PrivateRoute}  from "routes";
import  {Login}  from "components/Login/Login";

class App extends React.Component {
  constructor(props) {
      super(props);
      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }

  render() {
      const { alert } = this.props;

      return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <Route path="/login" component={Login} />
                                <PrivateRoute component={Layout} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
      );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
