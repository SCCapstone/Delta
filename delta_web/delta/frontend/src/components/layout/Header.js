// navbar
import React, { Component } from "react";
import { Link } from "react-router-dom";

// need to check if logged in, so need redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;
export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    // pull out isAuthenticated and the user
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light mr-auto">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <StyledLink to="/">
              <button type="button" className="btn btn-outline-secondary">
                Home
              </button>
            </StyledLink>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="/profile/glance">Profile</Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="/data/download">Data</Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <Link to="/community/personal">Community</Link>
            </span>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={this.props.logout}
            >
              Logout
            </button>
          </li>
          {/* <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ""}</strong>
                </span> */}
        </ul>
      </nav>
    );
    const guestLinks = (
      <ul className="navbar-nav  mr-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg bg-light navbar-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// need access to auth
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
