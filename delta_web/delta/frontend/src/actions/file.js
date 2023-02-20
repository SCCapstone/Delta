import axios from 'axios';

import {createMessage,returnErrors} from "./messages";
import {fileTokenConfig,tokenConfig} from './auth';

import {ADD_CSV_FILE, DELETE_CSV_FILE, GET_CSV_FILES,GET_CSV_FILE, 
    CSV_FILE_UPDATE_SUCCESS,GET_CSV_FILES_PUBLIC} from "./types";
import { addTags } from './tags';

// POST FILE 
export const addCsvFile= (dictData) => (dispatch,getState) =>{
    /*
    Dict data has keys
    file: file object
    isPublic: bool
    description: str
    orgs: array of orgs
    */
    // pass in token
    axios.post('/api/upload/csv/',dictData,fileTokenConfig(getState,dictData['file']))
        .then(res=>{
            dispatch(createMessage({addCsvFileSuccess:"File posted"}));
            dispatch({
                type:ADD_CSV_FILE,
                payload: res.data
            });
            // add tags, if tags sent
            if(dictData.hasOwnProperty('tags')) {
                dispatch(addTags({file:res.data.csvFile.id,tags:dictData['tags']}))
            }

            const data = {...dictData,"id":res.data.csvFile.id}
            // add all other attributes
            axios.patch(`api/csv/${res.data.csvFile.id}/`,data,tokenConfig(getState))
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        })
        .catch(err=>{
            console.log(err)
            if(err.response){
                dispatch(createMessage({addCsvFileError:err.response.data.message}))
            }
            else{
                dispatch(createMessage({addCsvFileError:"Error uploading file. Check that the file name is unique compared to your previously uploaded files."}))
            }
        })
}

// GET FILES
export const getCsvFiles = () => (dispatch,getState) =>{
    axios.get('/api/csv/',tokenConfig(getState))
        .then(res => {
            console.log(res);
            return res;
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
// dict data expects:
/*
file_name
description
is_public
is_public_orgs
registered_organizations
tags
id (id of file)
*/
export const updateCsvFile = (dictData) => (dispatch,getState)=>{
    axios.patch(`api/csv/${dictData['id']}/`,dictData,tokenConfig(getState))
        .then(res=>{
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
// TODO: Make sure that you can only download files that are public
// or under your organization
// or are yours
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