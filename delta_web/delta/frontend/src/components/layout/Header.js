// navbar
import React, { useState } from "react";
import { Link } from "react-router-dom";


// need to check if logged in, so need redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

// styles
import "./header.css";

const Header = (props) => {
  // proptypes
  const { isAuthenticated, user } = props.auth;

  const [activeNav, setActiveNav] = useState("/");

  const authLinks = (
    /*
    Create the innver Navbar object that hosts the links
    Each nav-item is a new link on the navbar
    Each button is where the button stylization will be held
    */
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/">
              <button type="button" 
                onClick={()=>setActiveNav("/")}
                className = {activeNav === "/" ? "btn btn-secondary" : "btn btn-outline-secondary"}
              >
                Home
              </button>
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/profile/glance">
              <button type="button" 
                onClick={()=>setActiveNav("/profile/glance")}
                className = {activeNav === "/profile/glance" ? "btn btn-secondary" : "btn btn-outline-secondary"}
              >
                Profile
              </button>
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/data/download">
              <button type="button" 
                onClick={()=>setActiveNav("/data/download")}
                className = {activeNav === "/data/download" ? "btn btn-secondary" : "btn btn-outline-secondary"}
              >
                Data
              </button>
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <Link to="/community/personal">
              <button type="button" 
                onClick={()=>setActiveNav("/community/personal")}
                className = {activeNav === "/community/personal" ? "btn btn-secondary" : "btn btn-outline-secondary"}
              >
                Community
              </button>
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <button
              className="btn btn-outline-secondary"
              onClick={props.logout}
            >
              Logout
            </button>
          </span>
        </li>
      </ul>
  );
  const guestLinks = (
    //Creates the links that a guest user will see before they sign up or log in
    <ul className="navbar-nav  mr-auto">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
            <button type="button" 
              onClick={()=>setActiveNav("/register")}
              className = {activeNav === "/register" ? "btn btn-secondary" : "btn btn-outline-secondary"}
            >
              Register
            </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
            <button type="button" 
              onClick={()=>setActiveNav("/login")}
              className = {activeNav === "/login" ? "btn btn-secondary" : "btn btn-outline-secondary"}
            >
              Login
            </button>
        </Link>
      </li>
    </ul>
  );

  return(
    // pull out isAuthenticated and the user
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

// need access to auth
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
