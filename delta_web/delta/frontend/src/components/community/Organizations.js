import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Organizations extends Component {
    render(){
        return(
            <div>
                <h1>
                    Organization community
                </h1>
                <span>
                    <Link to="/community/personal">
                        click to see personal
                    </Link>
                </span>
            </div>
        )
    }
}

export default Organizations;