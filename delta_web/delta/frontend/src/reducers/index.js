// root reducer is a meeting place for all other reducers
import { combineReducers } from 'redux';
import csvFile from "./csvFile";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
    csvFile,
    errors,
    messages,
    auth,
});