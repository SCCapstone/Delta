import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Organizations extends Component {
    // grab oraganization information
    state = {
        data: [
        ]
    }
    // check that data loads
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
            <div className="container">
                <h1 className="text-center">
                    Organizations
                </h1>
                <div className='row'>
                    {this.state.data.map((item, index) => (
                        <div className="border container" key={index}>
                            <div className="row">
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
                                    <h3 className='card-title'>{item.name}</h3>
                                    <p className='card-text'>Here since {item.date_us_format}</p>
                                    <p className='card-text'>Following users: {item.following_user_count}</p>
                                    <Link className="link" to={`${item.id}`}>
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <span>
                    <Link className="btn btn-secondary btn-sm" to="/community/personal">
                        Click to see Personal
                    </Link>
                </span>
            </div>
        )
    }
}

export default Organizations;