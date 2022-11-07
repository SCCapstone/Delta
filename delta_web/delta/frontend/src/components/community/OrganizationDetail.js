import React from "react";
import {useParams} from "react-router-dom"
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const OrganizationDetail = () =>{

    // in reality you would use a function to grab organization data 
    // based on the passed id
    const data = {
        "id":1,
        "name":"Valafar Lab",
        "user_count":5
    }

    const propTypes = {

    }

    const {id}= useParams();

    console.log(id)

    return(
        <div>
            <h1>Organization Name: {data.name}</h1>
            <p>User count: {data.user_count}</p>


            <span>
                <Link to ="/community/organizations">
                    back to organizations
                </Link>
            </span>
        </div>
    );
}

export default OrganizationDetail;