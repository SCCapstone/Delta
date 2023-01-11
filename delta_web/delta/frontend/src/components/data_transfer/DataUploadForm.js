import React, {useCallback, useEffect,useState} from 'react';
import {useDropzone} from "react-dropzone";
import {addCsvFile} from '../../actions/file';
import {connect} from 'react-redux';
import styled from 'styled-components';

// select
import Select from 'react-select';

const getColor = (props) => {
  if (props.isDragActive) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }

  return '#000000';
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #d2d2d2;
    color: #000000;
    outline: none;
    transition: border .24s ease-in-out;
`;

const DataUploadForm = (props) =>{
  // max size of file
  // 5 MB
  const maxSize = 5*1048576;

  var [availableOrgs, setAvailableOrgs] = useState(null);

  const getAvailableOrgs = () =>{
    // to do
    // get your organizations
    //
    setAvailableOrgs(
      [
        {value:'Valafar Lab',label:'Valafar Lab'},
        {value:'Test Lab',label:'Test Lab'},
      ]
    );
  }

  useEffect(()=>{
    // on load call this once
    // GET ONLY THE ORGANIZATIONS AVAILABLE TO YOURSELF
    getAvailableOrgs();
  },[]);

  const onDrop = useCallback(acceptedFiles => {
    // do something if you want here
    acceptedFiles.forEach(file=>{
      $("#fileName").val(file.name)
    })
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
        var isPublic= $("#flexCheck").is(":checked")
        var description = $("#fileDescription").val();
        var fileName = $("#fileName").val();
        const data = {
          'file':file,
          'isPublic':isPublic,
          'description':description,
          'fileName':fileName
        }
        props.addCsvFile(data);
      });
  }

  if(availableOrgs == null) return;

  return(
      <form onSubmit = {onSubmit}>
          <div className="container"> 
          <Container {...getRootProps(isDragActive, isDragReject)}>
              <input {...getInputProps()}/>
              {!isDragActive && 'Click here or drop a file to upload.'}
              {isDragActive && !isDragReject && "Drop File"}
              {isDragReject && "File type not accepted."}
              {isFileTooLarge && (
              <div className = "text-danger mt-2">
                  File is too large.
              </div>
              )}
          </Container>
          <ul className = "list-group mt-2">
              {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile=>(
              <li className="list-group-item list-group-item-success">
                  {acceptedFile.name}
              </li>
              ))}
          </ul>
          </div>
          <br />
          <div className="input-group">
              <input type="text" className="form-control" placeholder = "Enter name of file" id= "fileName"/>
          </div>
          <div className= "form-check">
          <input className ="form-check-input" type="checkbox" value="isPublic" id="flexCheck"/>
          <label className="form-check-label" htmlFor = "flexCheck">
              Publically Visible
          </label>
          </div>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter a description of the file" id = "fileDescription"/>
          </div>
          <div>
            <h3>Available Organizations</h3>
            <Select 
              options = {availableOrgs}
              isMulti
            />
          </div>
          <br />
          <button className="btn btn-success mb-2">Submit</button>
      </form>
  )
}

export default connect(null,{addCsvFile})(DataUploadForm);