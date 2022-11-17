import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getOrganizations } from '../../actions/organization';

export class Organizations extends Component {

    state = {
        data: [
        ]
    }
    componentDidMount() {
        axios.get('/api/organization/').then((res) => {
            this.setState({
                data: res.data
            })
        })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <div>
                            <h1 className='card-title'>
                                Organization community
                            </h1>
                            {this.state.data.map((item) => (
                                <div className="border mb-3 container">
                                    <h3 className='card-subtitle'>Organization: {item.name}</h3>
                                    <p>Id: {item.id}</p>
                                    <p>Creation time: {item.timestamp}</p>
                                    <p>Following users: {item.following_user_count}</p>
                                    <Link to={`${item.id}`}>
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
                    </div>

                </div>

            </div>

        )
    }
}

export default Organizations;