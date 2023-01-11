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
                <a role="button" href="/#/data/upload/" className="btn btn-secondary btn-sm">
                  Upload
                </a> 
            </div>
    )
}

export default connect(null,{})(DataDownload);