import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchableCsvFileTable from '../csvFile/SearchableCsvFileTable';
import "./profile.css"
import ProfileSidebar from './ProfileSidebar';

const Personal = (props) => {
    //console.log(props);
    const [csvFiles, setCsvFiles] = useState(null);

    useEffect(() => {
        axios.get('/api/csv/', { headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${props.auth.token}` } })
            .then(res => {
                setCsvFiles(res.data);
            })
    }, [])

    if (csvFiles == null) return;

    return (
        <div className="container">
            <div className="row">
                <ProfileSidebar
                    first_name={props.auth.user.first_name}
                    last_name={props.auth.user.last_name}
                    email={props.auth.user.email}
                    username={props.auth.user.username}
                />
                <div className='profile-info col-md-9'>
                    <h1 className="text-center">
                        Personal community
                    </h1>
                    <SearchableCsvFileTable csvFiles={csvFiles} textMinLength={3} />
                    <span>
                        <Link className="btn btn-secondary btn-sm" to="/community/organizations">
                            Click to see Organizations
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(Personal);