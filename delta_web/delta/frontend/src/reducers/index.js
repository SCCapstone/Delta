// root reducer is a meeting place for all other reducers
import { combineReducers } from 'redux';
import dataAccel from './dataAccel';
import errors from "./errors";
import messages from "./messages";
<<<<<<< HEAD
import auth from "./auth";
=======
import auth from './auth'
>>>>>>> vince-web-login-reg-pages

export default combineReducers({
    dataAccel,
    errors,
    messages,
    auth,
});