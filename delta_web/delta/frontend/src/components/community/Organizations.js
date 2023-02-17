import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrganizationCard from './OrganizationCard';

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
                        <OrganizationCard
                            orgObj = {item}
                            imgSrc = {'/media/Generic_Laboratory_Logo.png'}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Organizations;