import { createAction, handleActions } from 'redux-actions';
import { Map} from 'immutable';
import * as alertActions from 'modules/Alert/alert'
import {userService} from './userService';
import {history} from 'helpers'

const REQUEST = 'login/Request';
const SUCCESS = 'login/SUCCESS';
const FAILURE = 'login/FAILURE';
const LOGOUT = 'login/LOGOUT';

const request = createAction(REQUEST);
const success = createAction(SUCCESS);
const failure = createAction(FAILURE);
const logoutRequest = createAction(LOGOUT);


export const loginActions = {
    login,
    logout
};

function login(username, password) {

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
}

function logout() {
    debugger;
    userService.logout();

    return dispatch => {
        dispatch(logoutRequest());
        history.push('/');
    };
}


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? Map({ loggingIn : false, loggedIn: true, user : user}) : Map({ loggingIn: false, loggedIn: false, user : Map({})});

export default handleActions({
    [REQUEST] : (state, action) =>{        
        return state.set('loggingIn', true);
    },
    [SUCCESS] : (state, action) =>{        
        return state.set('loggedIn', true).set('user', action.payload).set('loggingIn', false);
    },
    [FAILURE] : (state, action) =>{        
        return state.set('loggedIn', true).set('user', action.payload).set('loggingIn', false);
    },
    [LOGOUT] : (state, action) =>{        
        return  state.set('loggedIn', false).set('user', Map({})).set('loggingIn', false);
    },
}, initialState)
