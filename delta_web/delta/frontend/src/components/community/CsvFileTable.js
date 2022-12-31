import axios from 'axios';
import React, {useEffect, useState,} from 'react';
import {connect} from 'react-redux';
import { tokenConfig } from '../../actions/auth';
import {getCsvFiles,deleteCsvFile} from '../../actions/file'; 
import { Link } from 'react-router-dom';

// https://ui.dev/react-router-url-parameters

const CsvFileTable = (props) =>{

  var [csvFiles,setCsvFiles] = useState(null);

  useEffect(()=>{
    axios.get('/api/csv/',{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
    .then(res=>{
      setCsvFiles(res.data);
    })
  },[])

  // probably should return some spinner
  if(csvFiles == null) return;

  return (
    <div>
      <h2>Your Csv Files</h2>
        {csvFiles.map(data=>(
          <table className = "table table-striped">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Upload Date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr key = {data.id}>
                <th>{data.file_name}</th>
                <th>{data.timestamp}</th>
                <Link to = {`/community/personal/csvs/${data.id}`}>
                  View File
                </Link>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  )
}

const mapStateToProps = state => ({
    auth:state.auth,
});

export default connect(mapStateToProps,{getCsvFiles})(CsvFileTable);