import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchableCsvFileTable from '../csvFile/SearchableCsvFileTable';

const Personal = (props) => {

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
                
            </div>
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
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(Personal);