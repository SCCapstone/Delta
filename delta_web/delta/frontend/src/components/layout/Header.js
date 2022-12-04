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
      //Create the innver Navbar object that hosts the links
      <nav className="navbar navbar-expand-lg navbar-dark bg-light mr-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            //First link in navbar
            <span className="nav-link">
              //Links to the homepage
              <StyledLink to="/">
                //Creates a button for the link, go here to style button
                <button type="button" className="btn btn-outline-secondary">
                  Home
                </button>
              </StyledLink>
            </span>
          </li>
          <li className="nav-item">
            //Second Link in navbar
            <span className="nav-link">
              //Link goes to users profile at a glance screen
              <StyledLink to="/profile/glance">
                //Button styling for the profile link
                <button type="button" className="btn btn-outline-secondary">
                  Profile
                </button>
              </StyledLink>
            </span>
          </li>
          //Third Link on navbar
          <li className="nav-item">
            <span className="nav-link">
              //Goes to the download page
              <StyledLink to="/data/download">
                //Button styling for the download page link
                <button type="button" className="btn btn-outline-secondary">
                  Data
                </button>
              </StyledLink>
            </span>
          </li>
          //Fourth link on navbar
          <li className="nav-item">
            <span className="nav-link">
              //Goes to the user's community page
              <StyledLink to="/community/personal">
                //Button styling for the community page
                <button type="button" className="btn btn-outline-secondary">
                  Community
                </button>
              </StyledLink>
            </span>
          </li>
          //Fifth button on navbar
          <li className="nav-item">
            <span className="nav-link">
              //Button which logs the user out
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
