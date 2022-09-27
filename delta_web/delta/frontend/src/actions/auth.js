// action funcs for auth

// for requests
import axios from 'axios';

import {returnErrors} from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) =>{
    // user loading
    dispatch({type: USER_LOADING});

    // get token from state
    // looking at auth reducer and getting that token 
    const token = getState().auth.token;

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // if token, add to headers config
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    // create request to load the user
    axios.get('/api/auth/user',config)
    .then(res=>{
        dispatch({
            type:USER_LOADED,
            payload: res.data
        });
    })
    // if we are not authenticated, no token that matches, need to catch
    .catch(err=>{
        // dispatch the error
        dispatch(returnErrors(err.response.data,err.response.status));
        // dispatch the type of error
        dispatch({
            type:AUTH_ERROR
        })
    });
}