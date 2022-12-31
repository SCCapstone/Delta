import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getCsvFile,deleteCsvFile} from "../../actions/file";
import {useEffect} from 'react'

import {
    useParams
} from "react-router-dom"
import axios from 'axios';

const CsvFileDetail = (props) => {
    const {id} = useParams();

    const [csvFile,setCsvFile] = useState(null);

    useEffect(()=>{
      axios.get(`/api/csv/${id}/`,{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
      .then(res=>{
        setCsvFile(res.data);
      })
    },[])

    const clickDelete = () =>{
      props.deleteCsvFile(id);
    }

    // should return some spinner
    if(csvFile == null) return;

    return (
        <div className = "container">
            <div key={csvFile.id}>
              {/* File ID input group */}
              <div className="input-group mb-3">

                {/* Pre-fix label */}
                <div className="input-group-prepend">
                  <span className="input-group-text bg-secondary text-white" id="basic-addon1">
                    File ID
                  </span>
                </div>

                {/* Input Box */}
                <input className="form-control" value={csvFile.id} readOnly={true} 
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

                <input className="form-control" value={csvFile.timestamp} readOnly={true} 
                type="text" 
                ></input>
              </div>
              {/* description input group */}
              <div className="input-group mb-3">

                {/* Pre-fix label */}
                <div className="input-group-prepend">
                  <span className="input-group-text bg-secondary text-white" id="basic-addon1">
                    Description
                  </span>
                </div>

                <input className="form-control" value={csvFile.description} readOnly={true} 
                type="text" 
                ></input>
              </div>
              <button role="button" onClick={clickDelete} className = "btn btn-danger">
                Delete
              </button>
              <a role="button" href="/#/community/personal" className="btn">
                Back
              </a>           
            </div>
          <h1>
          </h1>
      </div>
    )
}

const mapStateToProps = state =>({
  auth:state.auth
})


export default connect(mapStateToProps,{getCsvFile,deleteCsvFile})(CsvFileDetail);