// any actions we want to fire off go here
//
// use axios 
import axios from 'axios';

import { createMessage } from "./messages";

import { GET_ERRORS,GET_DATA_ACCEL, DELETE_DATA_ACCEL, ADD_DATA_ACCEL } from './types';

// GET DATA ACCEL
export const getDataAccel = () => dispatch => {
    axios.get('data/api/accel/')
        .then(res => {
            dispatch({
                type:GET_DATA_ACCEL,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// DELETE DATA ACCEL
// NOTE: if doesnt work may need to clear cookies
export const deleteDataAccel = (id) => dispatch => {
    axios.delete(`data/api/accel/${id}/`)
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
export const addDataAccel = (data) => dispatch => {
    axios.post('data/api/accel/',data)
        .then(res => {
            dispatch(createMessage({addDataAccel: "Data Accel Added"}));
            dispatch({
                type:ADD_DATA_ACCEL,
                payload: res.data
            });
        })
        .catch(err =>{
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload:errors
            });
        });
};