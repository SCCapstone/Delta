import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class DetailedView extends Component {
    render(){
        return(
            <div>
                <h1>
                    Profile in detail
                </h1>
                <span>
                    <Link to="/profile/glance">
                        click to see at a glance
                    </Link>
                </span>
            </div>
        )
    }
}

export default DetailedView;