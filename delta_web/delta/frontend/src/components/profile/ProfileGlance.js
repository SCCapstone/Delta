import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';

const ProfileGlance = (props) =>{
    //This is the rendering for the profile at a glance page.
    const {isAuthenticated, user} = props.auth; //Making sure that its the specific user thats information is displayed 
    if(user.followed_organizations == null) return;
    return(
        //This is the main container that holds the information. User can view all their information without editing the
        //fields. They can view their organizations and click on the link to go to their organizations page.
        <div className='container'>
            <h1>
                <center>Your Information</center>
            </h1>
            <h2>
                Basic Info
            </h2>
            <h4>
                First Name: {user.first_name}
            </h4>
            <h4>
                Last Name: {user.last_name}
            </h4>
            <h4>Email: {user.email}</h4>
            <h4>Username: {user.username}</h4>
            <h2>
                Followed Organizations
            </h2>
            <div>
                {(user.followed_organizations).map((item,index)=>(
                    <div className = "card" key={index}>
                        <div className = "card-body">
                            <Link to = {`/community/organizations/${item.id}`}>
                            <h5 className="card-title">
                                {item.name}
                            </h5>
                            </Link>
                            <p className = "card-text">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <br/>
        
            <div>
                <Link className= "btn btn-info" to="/profile/detailed">
                    Click Update Profile
                </Link>
                <br/>
                <br/>
                <Link className="btn btn-success" to={`/profile/${props.auth.user.username}`}>
                    See your public profile
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps)(ProfileGlance);