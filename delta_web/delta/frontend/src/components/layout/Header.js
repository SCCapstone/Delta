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
      /*
      Create the innver Navbar object that hosts the links
      Each nav-item is a new link on the navbar
      Each button is where the button stylization will be held
      */
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
    );
    const guestLinks = (
      //Creates the links that a guest user will see before they sign up or log in
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
      // <nav className="navbar navbar-expand-lg bg-light navbar-dark">
      //   <div className="container">
      //     <div className="navbar-header">
      //       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target = ".navbar-collapse"></button>
      //     </div>
      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul className="navbar-nav mr-auto">
      //         {isAuthenticated ? authLinks : guestLinks}
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class = "container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
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
