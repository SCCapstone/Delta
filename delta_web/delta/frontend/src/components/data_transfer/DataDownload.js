import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PublicCsvFileTable from './PublicCsvFileTable';
import axios from "axios";

const DataDownload = (props) =>{
    // the csv files
    const [csvFiles, setCsvFiles] = useState(undefined);

    // on load call this
    useEffect(()=>{
        axios.get('/api/public_csvs/',{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
        .then(res=>{
        setCsvFiles(res.data);
        })
    },[])

    if (csvFiles == undefined) return;

    return(
        <div className="container">
            <div>
                <h1>
                    Download Page  
                </h1>
                <p>
                    Click a file to add it to your download queue. Files in the queue will have a light blue background. 
                    To remove a file from the queue, reclick it.
                </p>
            </div>
            <PublicCsvFileTable 
            csvs = {csvFiles}
            textMinLength = {3}
            />
            <Link to="/data/upload" className="btn btn-secondary btn-sm"> 
                Upload
            </Link>
        </div>
    )
}
const mapStateToProps = state => ({
  auth:state.auth
});

export default connect(mapStateToProps,{})(DataDownload);