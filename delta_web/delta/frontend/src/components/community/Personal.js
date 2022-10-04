import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Personal extends Component {
    render(){
        return(
            <div>
                <h1>
                    Personal community
                </h1>
                <span>
                    <Link to="/community/organizations">
                        click to see organizations
                    </Link>
                </span>
            </div>
        )
    }
}

export default Personal;