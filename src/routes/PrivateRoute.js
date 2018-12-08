import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    localStorage.getItem('user')
    ? <Route path="/" component={Component} />
    : <Redirect to={{ pathname: '/login' }} />
)
