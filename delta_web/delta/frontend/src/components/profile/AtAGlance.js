import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class AtAGlance extends Component {
    render(){
        return(
            <div>
                <h1>
                    Profile At A Glance
                </h1>
                <span>
                    <Link to="/profile/detailed">
                        click to see detailed
                    </Link>
                </span>
            </div>
        )
    }
}

export default AtAGlance;