import axios from 'axios';

import {createMessage,returnErrors} from "./messages";
import { tokenConfig } from './auth';

import {POST_FILE} from "./types";

// POST FILE 
export const postFile = (data) => (dispatch,getState) =>{
    // pass in token
    axios.post('/api/upload/csv/',data,tokenConfig(getState))
        .then(res=>{
            dispatch(createMessage({postFile:"File posted"}));
            dispatch({
                type:POST_FILE,
                payload: res.data
            });
        })
        .catch(err=>{
            dispatch(
                returnErrors(err.response.data,err.response.status)
            )
        })
}