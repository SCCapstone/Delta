// action funcs for auth

// for requests
import axios from 'axios';

import {returnErrors} from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    USER_DELETE,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) =>{
    // user loading
    dispatch({type: USER_LOADING});

    // create request to load the user
    axios.get('/api/auth/user',tokenConfig(getState))
    .then(res=>{
        dispatch({
            type: USER_LOADED,
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

// LOGIN USER
export const login = (username,password) => dispatch =>{

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    // request body
    const body = JSON.stringify({username,password});

    axios.post('/api/auth/login',body, config)
    .then((res)=>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        });
    })
    // if we are not authenticated, no token that matches, need to catch
    .catch((err)=>{
        console.log(err);
        // dispatch the error
        dispatch(returnErrors(err.response.data,err.response.status));
        // dispatch the type of error
        dispatch({
            type:LOGIN_FAIL,
        })
    });

    
}
// LOGOUT USER
export const logout= () => (dispatch, getState) =>{

    // create request to load the user
    // need to pass in null as the body here
    axios.post('/api/auth/logout',null,tokenConfig(getState))
    .then((res)=>{
        dispatch({
            type:LOGOUT_SUCCESS,
        });
    })
    // if we are not authenticated, no token that matches, need to catch
    .catch(err=>{
        // dispatch the error
        dispatch(returnErrors(err.response.data,err.response.status));
    });
}

// REGISTER USER
export const register= ({username,first_name,last_name,password,email}) => dispatch =>{
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    // request body
    const body = JSON.stringify({username,first_name,last_name,email,password});

    axios.post('/api/auth/register',body, config)
    .then((res)=>{
        dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        });
    })
    // if we are not authenticated, no token that matches, need to catch
    .catch((err)=>{
        console.log(err);
        // dispatch the error
        dispatch(returnErrors(err.response.data,err.response.status));
        // dispatch the type of error
        dispatch({
            type:REGISTER_FAIL,
        })
    });
}

export const deleteUser = () => (dispatch,getState) =>{
    // delete a user    
    axios.post('/api/users/delete',tokenConfig(getState))
        .then(res=>{
            dispatch({
                type:USER_DELETE,
                payload:res.data
            });
        })
        .catch(err=>{
            dispatch(returnErrors(err.response.data,err.response.status))
        })
}

// Setup config with token - helper function
// arrow func that takes in getState
export const tokenConfig = getState => {
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
    // return config with token
    return config;
}

export const fileTokenConfig = (getState,file) =>{
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
        config.headers["Content-Disposition"] = `attachment; filename=${file.name}`;
    }
    // return config with token
    return config
}