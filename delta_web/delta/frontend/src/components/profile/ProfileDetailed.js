import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteUser} from "../../actions/auth";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export class ProfileDetailed extends Component {
    static propTypes = {
        deleteUser: PropTypes.func.isRequired,
    }
    onDelete =() =>{
        this.props.deleteUser();
    }
    render(){
        return(
            <div>
                <h1>
                    Profile in detail
                </h1>
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

export default connect(null,{deleteUser})(ProfileDetailed);