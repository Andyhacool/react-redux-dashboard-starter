import React from "react";
import ReactDOM from "react-dom";
import {store} from "./helpers"
import { Provider } from 'react-redux';
import App from 'components/App/App.jsx';
import "assets/css/material-dashboard-react.css?v=1.5.0";

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
