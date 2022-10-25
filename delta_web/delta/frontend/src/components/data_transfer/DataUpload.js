/*

Upload files via drag and drop.
https://upmostly.com/tutorials/react-dropzone-file-uploads-react
*/

import React, {Component,useState,useEffect,useMemo, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {useDropzone} from "react-dropzone";
import {addCsvFile} from '../../actions/file';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const DataUpload = (props) => {

  const propTypes = {
    addDataAccel:PropTypes.func.isRequired
  };

  // max size of file
  // 5 MB
  const maxSize = 5*1048576;

  const onDrop = useCallback(acceptedFiles =>{
    console.log(acceptedFiles);
  },[]);

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    accept: 'text/csv',
    minSize: 0,
    maxSize:maxSize,
  });

  // to do: check if file too large
  const isFileTooLarge = false;
  // const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  const onSubmit = (e) =>{
    e.preventDefault();
      acceptedFiles.forEach(file=> {
        console.log(file)
        props.addCsvFile(file);
      });
  }

  return(
    <div>
        <h1>
            Data Upload        
        </h1>

        <form onSubmit = {onSubmit}>
          <div {...getRootProps()}>
            <input {...getInputProps()}/>
            {!isDragActive && 'Click here or drop a file to upload.'}
            {isDragActive && !isDragReject && "Drop File"}
            {isDragReject && "File type not accepted."}
            {isFileTooLarge && (
              <div className = "text-danger mt-2">
                  File is too large.
              </div>
            )}
            <ul className = "list-group mt-2">
              {acceptedFiles.length>0 && acceptedFiles.map(acceptedFile=>(
                <li className="list-group-item list-group-item-success">
                  {acceptedFile.name}
                </li>
              ))}
            </ul>
          </div>
          <button>Submit</button>
        </form>

        <span>
            <Link to="/data/download">
                Click to see data download
            </Link>
        </span>
    </div>
  )
}

export default connect(null,{addCsvFile})(DataUpload);