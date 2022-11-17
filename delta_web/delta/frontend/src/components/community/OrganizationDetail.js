import axios from "axios";
import React,{useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom'

const OrganizationDetail = () =>{

    // in reality you would use a function to grab organization data 
    // based on the passed id
    const [data,setData] = useState(null);
    const [dataPosts,setDataPosts] = useState(null);

    const {id}= useParams();

    const getData = async ()=>{
        try {
            const response = await axios.get('/api/organization/' + id + '/');
            setData(response.data);
        }catch(err){
            console.log(err)
        }
    }

    const getPosts = async ()=>{
        try {
            const response = await axios.get('/api/organization/' + id +'/data_posts/');
            console.log(response.data);
            setDataPosts(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData();
        getPosts();
    },[]);

    if(data == null || dataPosts == null) return;

    return(
        <div className="container">
            <div>
                <h1>Organization Name: {data.name}</h1>
                <p>User count: {data.following_user_count}</p>

                <h4>
                    All files under this organization
                </h4>
                <small>
                    Note that when you register under an organization, at the moment all of the data you upload is a part of the organization.
                </small>

                <div>
                    {dataPosts.map((item)=>(
                        <div className = "border mb-3 container">
                            <h5>File name: {item.file_name}</h5>
                            <h5>File id: {item.id}</h5>
                            <h5>Timestamp: {item.timestamp}</h5>
                            <h5>Author: {item.author_username}</h5>
                        </div>
                    ))}
                </div>

                <span>
                    <Link to ="/community/organizations">
                        back to organizations
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default OrganizationDetail;