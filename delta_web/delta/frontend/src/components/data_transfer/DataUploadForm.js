import React, {useCallback, useEffect,useState} from 'react';
import {useDropzone} from "react-dropzone";
import {addCsvFile} from '../../actions/file';
import {connect} from 'react-redux';
import styled from 'styled-components';

import TagsInput from './TagsInput';


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
    border-width: 0.2em;
    text-align:center;
    border-radius: 0.2em;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #d2d2d2;
    height:10em;
    color: #000000;
    outline: none;
    transition: border .24s ease-in-out;
`;

const DataUploadForm = (props) =>{
  // max size of file
  // 5 MB
  const maxSize = 5*1048576;

  // available organizations
  const [selectOptions, setSelectOptions] = useState([]);
  // select values
  const [selectedValues,setSelectedValues] = useState([]);
  // tags
  const [tags,setTags] = useState([]);

  var arrOrgs = []

  useEffect(()=>{
    var select = []
    props.availableOrgs.map((org)=>{
      select.push({
        'value':org.id,'label':org.name
      })
    })
    setSelectOptions(select);
  },[])

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

  const onSelectChange = (arrSelects) =>{
    // reset
    arrOrgs = []
    arrSelects.map((obj)=>{
      arrOrgs.push(obj.value)
    }) 
  }

  const onSubmit = (e) =>{
    e.preventDefault();
      acceptedFiles.forEach(file=> {
        var isPublic= $("#flexCheckPublic").is(":checked");
        var isPublicOrgs = $("#flexCheckPublicToOrg").is(":checked");
        var description = $("#fileDescription").val();
        var fileName = $("#fileName").val();
        // get the organizations
        const data = {
          'file':file,
          'isPublic':isPublic,
          'isPublicOrgs':isPublicOrgs,
          'description':description,
          'fileName':fileName,
          'orgs':arrOrgs,
          'tags':tags
        }
        props.addCsvFile(data);
      });
  }

  const updateTags = (tags) =>{
    setTags(tags)
  }

  return(
      <form onSubmit = {onSubmit}
      onKeyDown={(e)=> {e.key === 'Enter' && e.preventDefault()}}
      >
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
              {acceptedFiles.length > 0 && acceptedFiles.map((acceptedFile,index)=>(
              <li className="list-group-item list-group-item-success" key={index}>
                  {acceptedFile.name}
              </li>
              ))}
          </ul>
          </div>
          <br />
          <div>
            {/* Inputs */}
            <div>
              <h3>File Name</h3>
              <small>
                File names should be descriptive of the file being uploaded. Don't worry about appending `.csv` to your files.
              </small>
              <div className="input-group">
                <input type="text" className="form-control" placeholder = "Enter name of file" id= "fileName"/>
              </div>
            </div>
            <div>
              <h3>File Description</h3>
              <small>
                File descriptions should indicate important information about the file contents, the methods of collecting the data, and any other important information such as rights of use.
              </small>
              <div className="input-group">
                <textarea type="text" className="form-control" placeholder="Enter a description of the file" id = "fileDescription"/>
              </div>
            </div>
            <div>

              <h3>Visibility</h3>
              <div className= "form-check">
                <input className ="form-check-input" name="flexCheck" type="radio" value="isPublic" id="flexCheckPublic"/>
                <label className="form-check-label" htmlFor = "flexCheckPublic">
                    Publically Visible
                </label>
              </div>


              <div className= "form-check">
                <input className ="form-check-input" name="flexCheck" type="radio" value="isPublic" id="flexCheckPublicToOrg"/>
                <label className="form-check-label" htmlFor = "flexCheckPublicToOrg">
                    Public to Orgs
                </label>
              </div>


              <div className= "form-check">
                <input className ="form-check-input" name="flexCheck" type="radio" value="isPublic" id="flexCheckPrivate"/>
                <label className="form-check-label" htmlFor = "flexCheckPrivate">
                    Private
                </label>
              </div>


            </div>
            <div>
              <h3>Available Organizations</h3>
              <small>
                When you select an organization, the file will be visible to all members of the organization when you make it publically visible.
              </small>
              <Select 
                options = {selectOptions}
                onChange={onSelectChange}
                isMulti
              />
            </div>
            <br />
            <div>
              <h5>Tags</h5>
              <TagsInput updateParentTags={updateTags} />
            </div>
            <br/>
            <button className="btn btn-success mb-2">Submit</button>
          </div>
      </form>
  )
}


export default connect(null,{addCsvFile})(DataUploadForm);