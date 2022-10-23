import axios from 'axios';

import {createMessage,returnErrors} from "./messages";
import {fileTokenConfig,tokenConfig} from './auth';

import {ADD_CSV_FILE, DELETE_CSV_FILE, GET_CSV_FILE} from "./types";

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

// GET FILE
export const getCsvFile = () => (dispatch,getState) =>{
    axios.get('/api/csv/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_CSV_FILE,
                payload:res.data
            })
        })
        .catch(err=>dispatch(
            returnErrors(err.response.data,err.response.status)
        ))
}

// DELETE FILE
export const deleteCsvFile = (id) => (dispatch,getState) =>{
    axios.delete(`api/csv/${id}/`,tokenConfig(getState))
    .then(res=>{
        dispatch(createMessage({deleteCsvFile:"Csv File Deleted"}));
        dispatch({
            type:DELETE_CSV_FILE,
            payload: id
        });
    })
    .catch(err=>console.log(err));
}