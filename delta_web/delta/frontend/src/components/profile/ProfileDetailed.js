import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteUser} from "../../actions/auth";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ProfileForm from './ProfileForm';

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
                    <div className="">
                        <div className="card mb-4">
                            <div className="card-header">Change your information</div>
                            <div className="card-body">
                                <ProfileForm/>
                                <br/>
                                <button className="btn btn-danger" onClick={this.onDelete}>
                                Remove account?
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <Link className= "btn btn-info" to="/profile/glance">
                        Click to see at a glance
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