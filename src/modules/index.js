import { combineReducers } from 'redux';
import alert from './Alert/alert';
import auth from './Auth/authentication';

export default combineReducers({
    alert,
    auth
});