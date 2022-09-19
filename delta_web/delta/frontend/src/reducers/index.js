// root reducer is a meeting place for all other reducers
import  { combineReducers } from 'redux';
import dataAccel from './dataAccel';

export default combineReducers({
    dataAccel
});