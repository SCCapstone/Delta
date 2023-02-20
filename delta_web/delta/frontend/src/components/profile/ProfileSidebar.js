import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import "./profile.css";

/*
Sidebar for profile page
Expects 

firstname
lastname
email
username
pagename
*/

const ProfileSidebar = (props) => {
    //console.log(props);
    return (
        <div className="profile-nav col-md-3">
            <div className="panel">
                <div className="user-heading round">
                    {/* <a href="#">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                </a> */}
                    <h1>{props.first_name} {props.last_name}</h1>
                    <p>{props.email}</p>
                </div>
                <ul className="nav nav-pills flex-column">
                    <li className= {props.pagename === "Profile" ? "active":"NotActive"}><Link to='/profile/glance'>Profile</Link></li>
                    <li className= {props.pagename === "Public" ? "active":"NotActive"}><Link to={`/profile/${props.username}`}>Public profile</Link></li>
                    <li className= {props.pagename === "Personal" ? "active":"NotActive"}><Link to='/profile/personal'>Your Files</Link></li>
                    <li className= {props.pagename === "Detail" ? "active":"NotActive"}><Link to='/profile/detailed'>Edit profile</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileSidebar;