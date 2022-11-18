import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PublicCsvFileTable from './PublicCsvFileTable';

export class DataDownload extends Component {
    render(){
        return(
            <div>
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
}

export default DataDownload;