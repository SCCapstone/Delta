import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PublicCsvFileTable from './PublicCsvFileTable';

const DataDownload = () =>{
    return(
        <div className="container">
            <h1>
                Download Page  
            </h1>
            <PublicCsvFileTable/>
            <Link to="/data/upload" className="btn btn-secondary btn-sm"> 
                Upload
            </Link>
        </div>
    )
}

export default connect(null,{})(DataDownload);