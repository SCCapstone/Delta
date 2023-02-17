import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PublicCsvFileTable from './PublicCsvFileTable';

const DataDownload = () =>{
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
            <PublicCsvFileTable/>
            <Link to="/data/upload" className="btn btn-secondary btn-sm"> 
                Upload
            </Link>
        </div>
    )
}

export default connect(null,{})(DataDownload);