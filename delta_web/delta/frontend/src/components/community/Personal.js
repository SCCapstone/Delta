import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CsvFileTable from './CsvFileTable';

export class Personal extends Component {
    render(){
        return(
            <div>
                <h1>
                    Personal community
                </h1>
                <CsvFileTable/>
                <span>
                    <Link className= "btn btn-secondary btn-sm" to="/community/organizations">
                        click to see organizations
                    </Link>
                </span>
            </div>
        )
    }
}

export default Personal;