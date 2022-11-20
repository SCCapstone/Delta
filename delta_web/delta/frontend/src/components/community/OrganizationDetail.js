import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { downloadCsvFile } from "../../actions/file";

const OrganizationDetail = (props) => {

    // in reality you would use a function to grab organization data 
    // based on the passed id
    const [data, setData] = useState(null);
    const [dataPosts, setDataPosts] = useState(null);

    const { id } = useParams();

    const getData = async () => {
        try {
            const response = await axios.get('/api/organization/' + id + '/');
            setData(response.data);
        } catch (err) {
            console.log(err)
        }
    }

    const downloadCsv = (fileId) => {
        props.downloadCsvFile(fileId);
    }

    const getPosts = async () => {
        try {
            const response = await axios.get('/api/organization/' + id + '/data_posts/');
            console.log(response.data);
            setDataPosts(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
        getPosts();
    }, []);

    if (data == null || dataPosts == null) return;

    return (
        <div className="card">
            <div className="card-body" style={{ backgroundColor: '#f5fcff' }}>
                <h1 className="card-title" style={{ flex: 1, backgroundColor: '#add8e6' }}>Organization Name: {data.name}</h1>
                <p className="card-text">User count: {data.following_user_count}</p>
                <h4 className="card-title">
                    All files under this organization
                </h4>
                <small>
                    Note that when you register under an organization, all of your public files are now under the organization as well.
                </small>
                <hr />

                <div>
                    {dataPosts.map((item) => (
                        <div className="border mb-3 container p-3">
                            <h5>File name: {item.file_name}</h5>
                            <h5>File id: {item.id}</h5>
                            <h5>Timestamp: {item.timestamp}</h5>
                            <h5>Author: {item.author_username}</h5>
                            <button className="btn btn-success btn-sm" onClick={() => downloadCsv(item.id)}>
                                Download
                            </button>
                        </div>
                    ))}
                </div>

                <span>
                    <Link to="/community/organizations">
                        back to organizations
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