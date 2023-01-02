import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CsvFileTable from '../csvFile/CsvFileTable';

export class Personal extends Component {
    render(){
        return(
            <div className="container">
                <h1 className="text-center">
                    Personal community
                </h1>
                <CsvFileTable/>
                <span>
                    <Link className= "btn btn-secondary btn-sm" to="/community/organizations">
                        Click to see Organizations
                    </Link>
                </span>
            </div>
        )
    }
}

export default Personal;