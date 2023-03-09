import React, {useCallback, useEffect,useState} from 'react';
import {useDropzone} from "react-dropzone";
import {addCsvFile} from '../../actions/file';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

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
  if(props.auth.user.username == undefined) return;
  var navigate = useNavigate();

  // max size of file
  // 5 MB
  const maxSize = 5*1048576;

  // available organizations
  const [selectOptions, setSelectOptions] = useState([]);
  // select values
  const [selectedValues,setSelectedValues] = useState([]);
  // tags
  const [tags,setTags] = useState([]);
  const [errors,setErrors] = useState('');

  const [arrOrgs,setArrOrgs] = useState([]);

  useEffect(()=>{
    var select = []
    props.availableOrgs.map((org)=>{
      select.push({
        'value':org.id,'label':org.name
      })
    })
    setSelectOptions(select);
  },[])

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    accept:{
      'text/csv':['.csv']
    },
    onDrop:(acceptedFiles,fileRejections) =>{
      fileRejections.forEach((file)=>{
        file.errors.forEach((err) =>{
          if(err.code === "file-too-large"){
            setErrors(`Error: ${err.message}`);
          }
          if(err.code === "file-invalid-type"){
            setErrors(`Error: ${err.message}`);
          }
        })
      })
      acceptedFiles.forEach((file)=>{
        $("fileName").val(file.name)
        setErrors('')
      })
    },
    minSize: 0,
    maxSize:maxSize,
    multiple:false,
  });

  // to do: check if file too large
  const isFileTooLarge = false;
  // const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  const onSelectChange = (arrSelects) =>{
    // reset
    let orgIds = []
    arrSelects.map((obj)=>{
      orgIds.push(obj.value)
    }) 
    setArrOrgs(orgIds);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
      acceptedFiles.forEach(file=> {
        var isPublic= $("#flexCheckPublic").is(":checked");
        var isPublicOrgs = $("#flexCheckPublicToOrg").is(":checked");
        var description = $("#fileDescription").val();
        var fileName = $("#fileName").val();
        console.log(file);
        // get the organizations
        const dictData= {
          'is_public':isPublic,
          'is_public_orgs':isPublicOrgs,
          'description':description,
          'file_name':fileName,
          'registered_organizations':arrOrgs,
          'tags':tags,
          'file':file,
          'author':props.auth.user.id,
        }
        props.addCsvFile(dictData)
          .then((res)=>{
              // good response
              if(res == undefined){
                navigate('/data/download')
              }
            }
          );
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
          </Container>
          <p className="text-bg-danger">
            {errors}
          </p>
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
                <input required type="text" className="form-control" placeholder = "Enter name of file" id= "fileName"/>
              </div>
            </div>
            <div>
              <h3>File Description</h3>
              <small>
                File descriptions should indicate important information about the file contents, the methods of collecting the data, and any other important information such as rights of use.
              </small>
              <div className="input-group">
                <textarea required type="text" className="form-control" placeholder="Enter a description of the file" id = "fileDescription"/>
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

const mapStateToProps = state =>({
  auth:state.auth
})

export default connect(mapStateToProps,{addCsvFile})(DataUploadForm);