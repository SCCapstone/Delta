import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getCsvFile,deleteCsvFile} from "../../actions/file";
import {useEffect} from 'react'
import PropTypes from 'prop-types'
import CsvFileForm from './CsvFileForm';

// https://ui.dev/react-router-url-parameters

import {
    useParams
} from "react-router-dom"

const CsvFileDetail = (props) => {
    const propTypes = {
        csvFiles: PropTypes.array.isRequired
    }
    const {id} = useParams();

    const [csvFiles] = useState([]);

    useEffect(()=>{
        props.getCsvFile(id);
    },[])

    return (
        <div>
            {props.csvFiles.filter(data=>data.id==id).map(data=>(
                <div>

                  {/* File ID input group */}
                  <div className="input-group mb-3">

                    {/* Pre-fix label */}
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-secondary text-white" id="basic-addon1">
                        File ID
                      </span>
                    </div>

                    {/* Input Box */}
                    <input className="form-control" value={data.id} readOnly={true} 
                    type="text" 
                    ></input>
                  </div>


                  {/* Timestamp input group */}
                  <div className="input-group mb-3">

                    {/* Pre-fix label */}
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-secondary text-white" id="basic-addon1">
                        Time-stamp
                      </span>
                    </div>

                    <input className="form-control" value={data.timestamp} readOnly={true} 
                    type="text" 
                    ></input>
                  </div>
                  
                  
                  <CsvFileForm id={id} original_file_name={data.file_name} original_description={data.description}/>   


                  <a role="button" href="/#/community/personal" className="btn btn-danger">
                    Cancel
                  </a>           

                </div>
            ))}
            <h1>
            </h1>
        </div>
    )
}

const mapStateToProps = state =>({
    csvFiles:state.csvFile.csvFile
})


export default connect(mapStateToProps,{getCsvFile,deleteCsvFile})(CsvFileDetail);