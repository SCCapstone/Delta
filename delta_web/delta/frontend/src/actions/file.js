import axios from 'axios';

import {createMessage,returnErrors} from "./messages";
import {fileTokenConfig,tokenConfig} from './auth';

import {ADD_CSV_FILE, DELETE_CSV_FILE, GET_CSV_FILES,GET_CSV_FILE, 
    CSV_FILE_UPDATE_SUCCESS,GET_CSV_FILES_PUBLIC} from "./types";

// POST FILE 
export const addCsvFile= (file) => (dispatch,getState) =>{
    // pass in token
    axios.post('/api/upload/csv/',file,fileTokenConfig(getState,file))
        .then(res=>{
            dispatch(createMessage({addCsvFile:"File posted"}));
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

// GET FILES
export const getCsvFiles = () => (dispatch,getState) =>{
    axios.get('/api/csv/',tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_CSV_FILES,
                payload:res.data
            })
        })
        .catch(err=>dispatch(
            returnErrors(err.response.data,err.response.status)
        ))
}
// GET FILE by ID
export const getCsvFile = (id) => (dispatch,getState) =>{
    axios.get(`/api/csv/${id}/`,tokenConfig(getState))
        .then(res => {
            dispatch({
                type:GET_CSV_FILE,
                payload:res.data
            })
        })
        .catch(err=>
            {
                dispatch(
                    returnErrors(err.response.data,err.response.status))
                console.log(err);
                }
        )
}
// UPDATE FILE
// only allow update name
export const updateCsvFile = ({id,file_name}) => (dispatch,getState)=>{
    const data = JSON.stringify({id,file_name})
    axios.patch(`api/csv/${id}/`,data,tokenConfig(getState))
        .then(res=>{
            console.log(res)
            dispatch(createMessage({updateCsvFileSuccess:"File successfully updated."}))
            dispatch({
                type:CSV_FILE_UPDATE_SUCCESS,
                payload:res.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
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

// GET PUBLIC FILES
export const getCsvFilesPublic = () => (dispatch,getState) =>{
    axios.get('/api/public_csvs/',tokenConfig(getState))
    .then(res=>{
        dispatch({
            type:GET_CSV_FILES_PUBLIC,
            payload:res.data
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

// DOWNLOAD A FILE
//  id is of file object
export const downloadCsvFile = (id) => (dispatch, getState) =>{
    axios.get(`/api/public_csvs/${id}/download`,tokenConfig(getState))
    .then(res=>{
        var fileContent = res.data;
        // temporary solution to get file name, naive
        var fileName = res.headers['content-disposition'].split('filename=')[1].split(';')[0];
        var downloadLink = document.createElement('a');
        var blob = new Blob(["\ufeff",String(fileContent)]);
        var url = URL.createObjectURL(blob);
        downloadLink.href=url;
        downloadLink.download = fileName + ".csv";
        document.body.appendChild(downloadLink);
        downloadLink.click()
        document.body.appendChild(downloadLink);
    })
    .catch(err=>{
        console.log(err);
    })
}