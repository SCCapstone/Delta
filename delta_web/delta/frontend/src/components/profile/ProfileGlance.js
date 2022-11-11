import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';

export class ProfileGlance extends Component {
    static propTypes = {
        auth:PropTypes.object.isRequired
    }

    // need to get them
    getRegisteredOrgs(){
    }

    componentDidMount(){
        // get your registered orgs

    }

    render(){
        const {isAuthenticated, user} = this.props.auth;
        return(
            <div>
                <h1>
                    Your Information
                </h1>
                <div>
                    <h4>First Name: {user.first_name}</h4>
                    <h4>Last Name: {user.last_name}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>Username: {user.username}</h4>
                </div>
                <span>
                    <Link to="/profile/detailed">
                        click to see detailed
                    </Link>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps)(ProfileGlance);