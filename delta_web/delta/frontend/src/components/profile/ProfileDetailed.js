import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteUser} from "../../actions/auth";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ProfileForm from './ProfileForm';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

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
            <div className="container-xl px-4 mt-4">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src="/media/closeup_african_american_woman.jpg" alt="" width='300' height='300'/>
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button className="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-xl-8">
                        <div className="card mb-4">
                            <div className="card-header">Change your information</div>
                            <div className="card-body">
                                <ProfileForm/>
                                <button className="btn btn-danger" onClick={this.onDelete}>
                                Remove account?
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <StyledLink to="/profile/glance">
                        Click to see at a glance
                    </StyledLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{deleteUser})(ProfileDetailed);