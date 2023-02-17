import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { downloadCsvFile } from "../../actions/file";
import SearchableCsvFileTable from "../csvFile/SearchableCsvFileTable";

const OrganizationDetail = (props) => {

    // in reality you would use a function to grab organization data 
    // based on the passed id
    const [data, setData] = useState(null);
    const [dataPosts, setDataPosts] = useState(null);


    const { id } = useParams();

    // get the organization
    const getData = () => {
        axios.get('/api/organization/' + id + '/')
        .then((res)=>{
            setData(res.data);
        })
    }

    // download CSV
    const downloadCsv = (fileId) => {
        props.downloadCsvFile(fileId);
    }

    // get organizations's posts
    const getPosts = () =>{
        axios.get('/api/organization/' + id + '/data_posts/')
        .then((res)=>{
            setDataPosts(res.data);
            console.log(res.data)
        })
    }

    useEffect(() => {
        getData();
        getPosts();
    }, []);

    // check that data has loaded
    if (data == null || dataPosts == null) return;

    return (
        <div className="container">
            <div>
                <h1>Organization Name: {data.name}</h1>
                <p>User count: {data.following_user_count}</p>
                <h4>
                    All files under this organization
                </h4>
                <small>
                    When you upload a file, you can set it to be under any of the organizations you are also a part of.
                </small>
                <hr />

                <div>
                    <SearchableCsvFileTable csvFiles = {dataPosts} textMinLength = {3}/>
                </div>

                <span>
                    <Link className="btn btn-secondary btn-sm" to="/community/organizations">
                        Back to Organizations
                    </Link>
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { downloadCsvFile })(OrganizationDetail);