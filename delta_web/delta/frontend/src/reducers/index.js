// root reducer is a meeting place for all other reducers
import  { combineReducers } from 'redux';
import dataAccel from './dataAccel';
import errors from "./errors";

export default combineReducers({
    dataAccel,
    errors
});