import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom";
import CsvFileForm from './CsvFileForm';
import {connect} from 'react-redux'

const CsvFileEdit = (props) => {

  const {id} = useParams();
  const [csvFile,setCsvFile] = useState(null);

  // get the csv file
  useEffect(()=>{
    axios.get(`/api/csv/${id}/`,{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
    .then(res=>{
      setCsvFile(res.data);
    })
  },[])

  // should return some spinner
  if(csvFile == null) return <div data-testid="csv_file_edit-1"></div>;

  return (
    <div className = "container"
    data-testid="csv_file_edit-1"
    >
      <div key = {csvFile.id}>
        <CsvFileForm csvFile={csvFile}/>
        <Link to = {`/csvs/${csvFile.id}`}>
          <button className = "btn btn-sm btn-primary">
            Back
          </button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps, null)(CsvFileEdit)