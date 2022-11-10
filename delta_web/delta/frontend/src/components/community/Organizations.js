import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { getOrganizations } from '../../actions/organization';

export class Organizations extends Component {

    state = {
        data: [
            {'id':1,
            'name' :'valafar lab',
            'user_count':5
            },
            {'id':2,
            'name' :'org 2',
            'user_count':5
            },
        ]
    }
    componentDidMount() {
        getOrganizations()
    }

    render(){
        return(
            <div>
                <h1>
                    Organization community
                </h1>
                {this.state.data.map((item)=>(
                <div class = "border mb-3 container">
                    <h3>Organization: {item.name}</h3>
                    <p>Id: {item.id}</p>
                    <p>user count: {item.user_count}</p>
                    <Link to= {`${item.id}`}>
                        View
                    </Link>
                </div>
                ))}
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