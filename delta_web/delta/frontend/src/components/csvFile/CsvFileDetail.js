import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getCsvFile,deleteCsvFile} from "../../actions/file";
import {useEffect} from 'react'

import {Link,useParams} from "react-router-dom"
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
      var dialog = confirm("Would you like to delete this file? There is no going back.");
      if(dialog){
        props.deleteCsvFile(id);
      }
    }

    // should return some spinner
    if(csvFile == null) return;

    return (
        <div className = "container">
            <div key={csvFile.id}>
              <div>
                <h1>
                  File Name
                </h1>
                <p>
                  {csvFile.file_name}
                </p>
              </div>
              <div>
                <h2>
                  Upload Date
                </h2>
                <p>
                  {csvFile.timestamp}
                </p>
              </div>
              <div>
                <h2>
                  Description
                </h2>
                <p>
                  {csvFile.description}
                </p>
              </div>
              <Link to= {`/csvs/${id}/edit`}>
                <button className="btn btn-primary">
                  Edit
                </button>
              </Link>
              <button onClick={clickDelete} className = "btn btn-danger">
                Delete
              </button>
            </div>
            <a role="button" href="/#/community/personal" className="btn">
              Back
            </a>           
      </div>
    )
}

const mapStateToProps = state =>({
  auth:state.auth
})


export default connect(mapStateToProps,{getCsvFile,deleteCsvFile})(CsvFileDetail);