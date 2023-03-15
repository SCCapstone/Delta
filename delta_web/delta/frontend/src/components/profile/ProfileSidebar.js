/************************************
*
* Delta project.
*
* Authors:
* Lexington Whalen (@lxaw)
* Carter Marlowe (@Cmarlowe132)
* Vince Kolb-LugoVince (@vancevince) 
* Blake Seekings (@j-blake-s)
* Naveen Chithan (@nchithan)
*
* File name: ProfileSidebar.js
*
* Brief description: This file is a template that is used in every page under profile. It is a 
*                    Sidebar that allows the user to easily navigate between 4 different pages
*                    that relate to profile. The current page is also highlighted in the sidebar.
*                    There are 5 things that this file requires for use. firstname, lastname, email,
*                    username, and pagename. These values should be added to props for it to be functional.
*************************************/

import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
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

// UTILITY: This is used to render and display the Profile Sidebar. 
// INPUTS: Props is immutable data that is passed to the function. It expects to have firstname, lastname, email, username, and pagename within props.
// OUTPUTS: The output is the rendered Sidebar with highlighted page the user is on.

const ProfileSidebar = (props) => {
    //console.log(props);
    return (
        <div className="profile-nav col-md-3" data-testid="profile_sidebar-1">
            <div className="panel">
                <div className="user-heading round">
                    <h1>{props.first_name} {props.last_name}</h1>
                    <p>{props.email}</p>
                </div>
                <ul className="nav nav-pills flex-column">
                    <li className={props.pagename === "Profile" ? "active" : "NotActive"}>
                        <Link to='/profile/glance' style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>  Profile
                        </Link>
                    </li>
                    <li className={props.pagename === "Public" ? "active" : "NotActive"}>
                        <Link to={`/profile/${props.username}`} style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                            </svg>  Public profile
                        </Link>
                    </li>
                    <li className={props.pagename === "Personal" ? "active" : "NotActive"}>
                        <Link to='/profile/personal' style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-spreadsheet-fill" viewBox="0 0 16 16">
                                <path d="M6 12v-2h3v2H6z" />
                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z" />
                            </svg>  Your Files
                        </Link>
                    </li>
                    <li className={props.pagename === "Detail" ? "active" : "NotActive"}>
                        <Link to='/profile/detailed' style={{ textDecoration: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>  Edit profile
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileSidebar;