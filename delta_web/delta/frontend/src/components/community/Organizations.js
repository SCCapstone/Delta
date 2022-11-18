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

    // referencing card styles horizontal: https://getbootstrap.com/docs/5.2/components/card/
    render() {
        return (
            <div className='card'>
                <h1 className='card-title'>
                    Organization community
                </h1>
                <div className='card mb-3'>

                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <img
                                src='/media/Generic_Laboratory_Logo.png'
                                className='card-img-fluid rounded-start'
                                alt='place holder text right now'
                                width='200'
                                height='200'
                            />
                        </div>

                        <div className='col-md-8'>
                            <div>
                                {this.state.data.map((item) => (
                                    <div className="border mb-3 container">
                                        <h3 className='card-title'>Organization: {item.name}</h3>
                                        <p className='card-text'>Id: {item.id}</p>
                                        <p className='card-text'>Creation time: {item.timestamp}</p>
                                        <p className='card-text'>Following users: {item.following_user_count}</p>
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
            </div>
        )
    }
}

export default Organizations;