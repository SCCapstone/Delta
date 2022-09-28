// any actions we want to fire off go here
//
// use axios 
import axios from 'axios';

import { createMessage,returnErrors } from "./messages";
import { tokenConfig } from './auth';

import {GET_DATA_ACCEL, DELETE_DATA_ACCEL, ADD_DATA_ACCEL } from './types';


// GET DATA ACCEL
export const getDataAccel = () => (dispatch,getState) => {
    // need to pass in the token to get to protected route
    axios.get('/api/accel/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_DATA_ACCEL,
                payload: res.data
            });
        })
        .catch(err => dispatch(
            returnErrors(err.response.data,err.response.status)
        ));
}

// DELETE DATA ACCEL
// NOTE: if doesnt work may need to clear cookies
export const deleteDataAccel = (id) => (dispatch,getState) => {
    // pass in the token as well
    axios.delete(`/api/accel/${id}/`,tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deleteDataAccel: "Data Accel Deleted"}));
            dispatch({
                type: DELETE_DATA_ACCEL,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD DATA ACCEL
export const addDataAccel = (data) => (dispatch,getState) => {
    // pass in the token
    axios.post('/api/accel/',data,tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({addDataAccel: "Data Accel Added"}));
            dispatch({
                type:ADD_DATA_ACCEL,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data,err.response.status)
            )
        }
    );
};