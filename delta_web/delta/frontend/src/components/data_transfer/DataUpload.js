import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class DataUpload extends Component {
    render(){
        return(
            <div>
                <h1>
                    Data Upload        
                </h1>


                <span>
                    <Link to="/data/download">
                        Click to see data download
                    </Link>
                </span>
            </div>
        )
    }
}

export default DataUpload;