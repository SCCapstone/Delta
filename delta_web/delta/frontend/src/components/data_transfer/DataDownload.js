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
                <span>
                    <Link to="/data/upload">
                        Click to see upload
                    </Link>
                </span>
            </div>
        )
    }
}

export default DataDownload;