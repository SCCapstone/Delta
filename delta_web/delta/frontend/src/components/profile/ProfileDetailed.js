import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteUser} from "../../actions/auth";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ProfileForm from './ProfileForm';
import styled from 'styled-components';

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
        const accountprofile = {
            height: "10rem",
        };
        const roundedcircle = {
            borderRadius: "50%" ,
        };
        const card = {
            boxShadow: "0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%)",
        };

        const cardheader = {
            padding: "1rem 1.35rem",
            marginBottom: "0",
            backgroundColor: "rgba(33, 40, 50, 0.03)",
            borderBottom: "1px solid rgba(33, 40, 50, 0.125)",
        };
        return(
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card mb-4 mb-xl-0">
                            <div class="card-header">Profile Picture</div>
                            <div class="card-body text-center">
                                <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button class="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="card mb-4">
                        <div class="card-header">Account Details</div>
                        <div class="card-body">
                            <ProfileForm/>
                        </div>
                    </div>
                </div>
                <h1>
                    Profile in detail
                </h1>
                <div>
                    <h4>Change your information</h4>
                    
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