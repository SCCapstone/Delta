import axios from 'axios';

import {createMessage,returnErrors} from "./messages";
import { fileTokenConfig} from './auth';

import {ADD_CSV_FILE} from "./types";

// POST FILE 
export const addCsvFile= (file) => (dispatch,getState) =>{
    // pass in token
    axios.post('/api/upload/csv/',file,fileTokenConfig(getState,file))
        .then(res=>{
            dispatch(createMessage({postFile:"File posted"}));
            dispatch({
                type:ADD_CSV_FILE,
                payload: res.data
            });
        })
        .catch(err=>{
            if(err.response){
                dispatch(
                    returnErrors(err.response.data,err.response.status)
                )
            }else if(err.request){
                dispatch(
                    returnErrors(err.request.data,err.request.status)
                )
            }else{
                console.log(err);
            }
        })
}