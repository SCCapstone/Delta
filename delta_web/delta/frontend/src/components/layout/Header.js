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
          <li className="nav-item">
            <span className="nav-link">
              <StyledLink to="/">
                <button type="button" className="btn btn-outline-secondary">
                  Home
                </button>
              </StyledLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <StyledLink to="/profile/glance">
                <button type="button" className="btn btn-outline-secondary">
                  Profile
                </button>
              </StyledLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <StyledLink to="/data/download">
                <button type="button" className="btn btn-outline-secondary">
                  Data
                </button>
              </StyledLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <StyledLink to="/community/personal">
                <button type="button" className="btn btn-outline-secondary">
                  Community
                </button>
              </StyledLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <button
                className="btn btn-outline-secondary"
                onClick={this.props.logout}
              >
                Logout
              </button>
            </span>
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
          <StyledLink to="/register" className="nav-link">
            <button type="button" className="btn btn-outline-secondary">
              Register
            </button>
          </StyledLink>
        </li>
        <li className="nav-item">
          <StyledLink to="/Login" className="nav-link">
            <button type="button" className="btn btn-outline-secondary">
              Login
            </button>
          </StyledLink>
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
