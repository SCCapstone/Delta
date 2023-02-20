import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';
import "./profile.css";
import ProfileSidebar from "./ProfileSidebar";

<script src="https://kit.fontawesome.com/f45b95bc62.js" crossorigin="anonymous"></script>
const ProfileGlance = (props) => {
    //This is the rendering for the profile at a glance page.
    const { isAuthenticated, user } = props.auth; //Making sure that its the specific user thats information is displayed
    const [style, setStyle] = useState({ width: '54px', height: '33px', position: 'absolute', verticalAlign: 'middle', marginTop: '33px', marginLeft: '-77px', border: '0px', fontWeight: 'bold', fontStyle: 'normal', fontVariant: 'normal', fontStretch: 'normal', fontSize: '20px', lineHeight: 'normal', fontFamily: 'Arial', textAlign: 'center', color: 'rgb(224, 107, 125)', padding: '0px', WebkitAppearance: 'none', background: 'none' })
    if (user.followed_organizations == null) return;
    return (
        //This is the main container that holds the information. User can view all their information without editing the
        //fields. They can view their organizations and click on the link to go to their organizations page.

        //<div>
        <div className='container bootstrap snippets bootdey'>
            <div className="row">
                <ProfileSidebar
                    first_name = {user.first_name}
                    last_name = {user.last_name}
                    email = {user.email}
                    username = {user.username}
                    pagename = {"Profile"}
                />
                <div className="profile-info col-md-9">
                    <div className="panel">
                        <div className="bio-graph-heading">
                            {user.bio}
                        </div>
                        <div className="panel-body bio-graph-info">
                            <h2>Basic Information</h2>
                            <div className="row">
                                <div className="bio-row">
                                    <p><span>First Name: </span> {user.first_name}</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Last Name: </span> {user.last_name}</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Username: </span> {user.username}</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Email:</span> {user.email}</p>
                                </div>
                                <h1>Your Organizations</h1>
                                <div className="row">
                                    {(user.followed_organizations).map((item, index) => (
                                        <div className="col-sm-6">
                                            <div className="card m-1 p-1" style={{ width: '24rem' }} key={index}>
                                                <img
                                                    src='/media/Generic_Laboratory_Logo.png'
                                                    className='card-img-top'
                                                    alt='place holder text right now'
                                                    width='200'
                                                    height='200'
                                                />
                                                <div className="card-body">

                                                    <h5 className="card-title">
                                                        {item.name}
                                                    </h5>

                                                    <p className="card-text">
                                                        {item.description}
                                                    </p>
                                                    <Link to={`/community/organizations/${item.id}`} className="btn btn-primary"> View Organization</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        //  <div>
        //                 {(user.followed_organizations).map((item,index)=>(
        //                     <div className = "card" key={index}>
        //                         <div className = "card-body">
        //                             <Link to = {`/community/organizations/${item.id}`}>
        //                             <h5 className="card-title">
        //                                 {item.name}
        //                             </h5>
        //                             </Link>
        //                             <p className = "card-text">
        //                                 {item.description}
        //                             </p>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //             <br/>

        //             <div>
        //                 <Link className= "btn btn-info" to="/profile/detailed">
        //                     Click Update Profile
        //                 </Link>
        //                 <br/>
        //                 <br/>
        //                 <Link className="btn btn-success" to={`/profile/${props.auth.user.username}`}>
        //                     See your public profile
        //                 </Link>
        //             </div> 
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ProfileGlance);