import React, { useState} from 'react'
import { connect } from 'react-redux';
import { updateCsvFile } from '../../actions/file';

const CsvFileForm = (props) => {
  // csvFile properties
  var [csvFileState,setCsvFileState] = useState({
    'file_name':props.csvFile.file_name,
    'id':props.csvFile.id,
    'description':props.csvFile.description,
    'is_public':props.csvFile.is_public,
    "registered_organizations":props.csvFile.registered_organizations
  })

  const onChange = (e) =>{
    const newState = {...csvFileState, [e.target.name]:e.target.value}
    setCsvFileState(newState);
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    props.updateCsvFile(csvFileState);
  }

  const onRadioChange = (e) =>{
    const newState = {...csvFileState,[e.target.name]: e.target.value == "public"}
    setCsvFileState(newState);
  }

  return (
    <form onSubmit = {onSubmit}>
      {/* File name input group */}
      <div className="input-group mb-3">

        {/* Pre-fix label */}
        <div className="input-group-prepend">
          <span className="input-group-text bg-secondary text-white" id="basic-addon1">
            Filename
          </span>
        </div>
        
        {/* Input Box */}
        <input className="form-control" value={csvFileState.file_name} placeholder={csvFileState.file_name} 
        name="file_name"
        type="text" 
        onChange={onChange}
        aria-label={csvFileState.file_name} 
        aria-describedby="basic-addon1"></input>

      </div>

      
      {/* Description input group */}
      <div className="input-group mb-3">

        {/* Pre-fix label */}
        <div className="input-group-prepend">
          <span className="input-group-text bg-secondary text-white">
            Description
          </span>
        </div>

        {/* Input Box */}
        <textarea className="form-control" value={csvFileState.description} placeholder={csvFileState.description} 
        name="description"
        onChange={onChange}
        aria-label={csvFileState.description} 
        ></textarea>

      </div>

      <div className="form-check">
        <input  className="form-check-input" type="radio" name="is_public" 
                id="publicRadio" value="public" checked={csvFileState.is_public} onChange={onRadioChange} />
        <label className="form-check-label">
          Public
        </label>
      </div>

      <div className="form-check">
        <input  className="form-check-input" type="radio" name="is_public" 
                id="privateRadio" value="private" checked={!csvFileState.is_public} onChange={onRadioChange} />
        <label className="form-check-label">
          Private
        </label>
      </div>

      <br />
      <br />

    {/* Update Information Button */}
    <button className="btn btn-success mb-2">
        Update Information
    </button>
    </form>
  )
}

const mapStateToProps = (state) =>({
})

export default connect(mapStateToProps,{updateCsvFile})(CsvFileForm);