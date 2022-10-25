import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteUser} from "../../actions/auth";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export class ProfileDetailed extends Component {
    static propTypes = {
        deleteUser: PropTypes.func.isRequired,
        auth:PropTypes.object.isRequired
    }
    onDelete =() =>{
        this.props.deleteUser();
    }
    render(){
        const {isAuthenticated, user} = this.props.auth;
        return(
            <div>
                <h1>
                    Profile in detail
                </h1>
                <div>
                    <h4>Change your information</h4>
                    <h4>First Name: {user.first_name}</h4>
                    <h4>Last Name: {user.last_name}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>Username: {user.username}</h4>
                </div>
                <button className="btn btn-danger" onClick={this.onDelete}>
                    Remove account?
                </button>
                <div>
                    <Link to="/profile/glance">
                        click to see at a glance
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{deleteUser})(ProfileDetailed);