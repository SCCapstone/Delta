// navbar
import React, { Component } from 'react'
<<<<<<< HEAD
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
                <span className = "nav-link">
                    <Link to="/">
                        Home
                    </Link>
                </span>
            </li>
            <li className="nav-item">
                <span className = "nav-link">
                    <Link to='/profile/glance'>
                        Profile
                    </Link>
                </span>
            </li>
            <li className="nav-item">
                <li>
                    <span className = "nav-link">
                        <Link to="/data/download">
                            Data
                        </Link>
                    </span>
                </li>
            </li>
            <li className="nav-item">
                <span className = "nav-link">
                    <Link to ="/community/personal">
                        Community
                    </Link>
                </span>
            </li>
            <li className="nav-item">
                <span className="nav-link" onClick={this.props.logout}>
                    Logout
                </span>
            </li>
                {/* <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ""}</strong>
                </span> */}
        </ul>
    );
    const guestLinks = (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className ="navbar-nav mr-auto">
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
            </div>
        </div>
    </nav>
    )
  }
=======
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Delta Web</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Updates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className='nav-link'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/register' className='nav-link'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
>>>>>>> vince-web-login-reg-pages
}

// need access to auth
const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(mapStateToProps,{logout})(Header);