import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { updateCsvFile } from '../../actions/file';

export class CsvFileForm extends Component{
    static propTypes = {

    }

    state = {
        "file_name":this.props.original_file_name,
        "id":this.props.id,
        "description":this.props.original_description,
        "is_public":this.props.original_is_public
    }
    onChange = e => {
      console.log(this.state)
      this.setState(
        {[e.target.name]:e.target.value}
    )
    }    

    onRadioChange = e => {    
      // Right now only 2 radio buttons (public/private) are supported
      this.setState(
        {[e.target.name]:e.target.value == "public"}
      )
    }


    onSubmit = e =>{
        e.preventDefault();
        const data = this.state;
        // call function
        this.props.updateCsvFile(data)
    }


    render(){

        return (
            <form onSubmit = {this.onSubmit}  >
              <div>

                {/* File name input group */}
                <div className="input-group mb-3">

                  {/* Pre-fix label */}
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-secondary text-white" id="basic-addon1">
                      Filename
                    </span>
                  </div>
                  
                  {/* Input Box */}
                  <input className="form-control" value={this.state.file_name} placeholder={this.state.file_name} 
                  name="file_name"
                  type="text" 
                  onChange={this.onChange}
                  aria-label={this.state.file_name} 
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
                  <textarea className="form-control" value={this.state.description} placeholder={this.state.description} 
                  name="description"
                  onChange={this.onChange}
                  aria-label={this.state.description} 
                  ></textarea>

                </div>

              


                <div className="form-check">
                  <input  className="form-check-input" type="radio" name="is_public" 
                          id="publicRadio" value="public" checked={this.state.is_public} onChange={this.onRadioChange} />
                  <label className="form-check-label">
                    Public
                  </label>
                </div>

                <div className="form-check">
                  <input  className="form-check-input" type="radio" name="is_public" 
                          id="privateRadio" value="private" checked={!this.state.is_public} onChange={this.onRadioChange} />
                  <label className="form-check-label">
                    Private
                  </label>
                </div>


                <br />
                <br />

              </div>
              {/* Update Information Button */}
              <button className="btn btn-success mb-2">
                  Update Information
              </button>

            </form>
        )
    }
}

const mapStateToProps = state =>({
    csvFiles: state.csvFile.csvFile
});

export default connect(mapStateToProps,{updateCsvFile})(CsvFileForm);