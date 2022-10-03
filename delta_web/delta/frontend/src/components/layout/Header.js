// navbar
import React, { Component } from 'react'
import {Link} from "react-router-dom";

// need to check if logged in, so need redux
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from '../../actions/auth';

export class Header extends Component {
    static propTypes = {
        auth:PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

  render() {
    // pull out isAuthenticated and the user
    const {isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
                    Logout
                </button>
            </li>
            <span className="navbar-text mr-3">
                <strong>{user ? `Welcome ${user.username}` : ""}</strong>
            </span>
        </ul>
    );
    const guestLinks = (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/register"
                className ="nav-link">
                Register
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Login"
                className ="nav-link">
                Login
                </Link>
            </li>
        </ul>
    );

    return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Delta Web</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className ="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className = "nav-link" href="#">Home</a>
                    </li>
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}

// need access to auth
const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(mapStateToProps,{logout})(Header);