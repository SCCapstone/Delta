// root reducer is a meeting place for all other reducers
import { combineReducers } from 'redux';
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
    errors,
    messages,
    auth,
});