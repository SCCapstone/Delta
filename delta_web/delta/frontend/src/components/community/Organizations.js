import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrganizationCard from './OrganizationCard';

const Organizations = (props) => {
    // grab oraganization information
    const [orgData,setOrgData] = useState(null);

    // check that data loads
    useEffect( ()=>{
        axios.get('/api/organization/').then((res) => {
            setOrgData(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    if(orgData == null) return;

    return(
        <div className="container">
            <div>
                <h1 className="text-center">
                    Organizations
                </h1>
                <p className="text-center">
                    Here you can see all organizations registered with Delta. Click an organization to view it. 
                </p>
            </div>
            <div className='row'>
                {orgData.map((item, index) => (
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


export default Organizations;