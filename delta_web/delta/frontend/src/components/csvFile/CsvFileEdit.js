import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
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
  if(csvFile == null) return;

  return (
    <div className = "container">
      <div key = {csvFile.id}>
        <CsvFileForm csvFile={csvFile}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps, null)(CsvFileEdit)