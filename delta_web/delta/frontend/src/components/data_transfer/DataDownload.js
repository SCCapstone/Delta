import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class DataDownload extends Component {
    render(){
        return(
            <div>
                <h1>
                    
                </h1>
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