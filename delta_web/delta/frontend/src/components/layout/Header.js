// navbar
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// need to check if logged in, so need redux
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import axios from 'axios'

// styles
// import "./header.css";

const Header = (props) => {

  // toggles the navbar
  // for some reason this is an issue with the current version of bootstrap
  //
  function changeClass() {

    const show = "navbar-collapse collapse show";
    const hide = "navbar-collapse collapse";


    var obj = document.getElementById("navbarToggleExternalContent").className;
    
    if (obj == hide) {
      document.getElementById("navbarToggleExternalContent").className = show;
    }

    else if (obj == show) {
      document.getElementById("navbarToggleExternalContent").className = hide;
    }

    else {
      document.getElementById("navbarToggleExternalContent").className = show;
    }
  }

  // proptypes
  const { isAuthenticated, user } = props.auth;

  // MAY WANT TO PUT THIS IN GLOBAL STORAGE, SINCE NOTIFICATIONS GO A LOT OF
  // PLACES
  // notifications
  const [arrNotifications,setArrNotifications] = useState([]);
  // SAME WITH DM's
  const [arrMessages,setArrMessages] = useState([]);

  // get notifications
  //
  const getNotifications = () =>{
    axios.get('/api/notification_review/get_unread',{headers:{'Content-Type':'application/json','Authorization': `Token ${props.auth.token}`}})
    .then((res)=>{
      setArrNotifications(res.data)
    })
  }
  // get messages
  //
  const getMessages = () =>{
    return [{
      'title':'Message from X',
      'pub_date':'2023-01-23',
      'id':3
    }]
  }

  // call on load
  useEffect(()=>{
    getNotifications()
    setArrMessages(getMessages());
  },[])  



  const authLinks = (
    /*
    Create the innver Navbar object that hosts the links
    Each nav-item is a new link on the navbar
    Each p is where the p stylization will be held
    */

    <>
    <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
      <li className="nav-item text-center mx-2 mx-lg-1">
        <span className="nav-link">
          <Link to = "/">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
              </svg>
            </div>
            Home
          </Link>
        </span>
      </li>
      <li className="nav-item text-center mx-2 mx-lg-1">
        <span className="nav-link">
          <Link to="/profile/glance">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </div>
            Profile
          </Link>
        </span>
      </li>
      <li className="nav-item text-center mx-2 mx-lg-1">
        <span className="nav-link">
          <Link to="/data/download">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud" viewBox="0 0 16 16">
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
              </svg>
            </div>
            Data
          </Link>
        </span>
      </li>
      <li className="me-auto nav-item dropdown text-center">
          <span className="nav-link">
            <Link to="/community/personal">
              <div> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                </svg>
              </div>
              Community
            </Link>
          </span>
      </li>

      { /* LEFT RIGHT SPLIT */}
      
      <li className="nav-item text-center mx-2 mx-lg-1">
        <a className="nav-link" href="#!">
          <div>
          <span className="badge rounded-pill badge-notification bg-success">{arrMessages.length}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
          </div>
          Messages
        </a>
      </li>
      <li className="nav-item text-center mx-2 mx-lg-1">
        <Link className="nav-link" to="/notifications">
          <div>
            <span className="badge rounded-pill badge-notification bg-primary">{arrNotifications.length}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg>
        </div>
          Notifications
        </Link>
      </li>
      <li className="nav-item text-center mx-2 mx-lg-1" >
        <div onClick={props.logout}>
          <span className="nav-link" >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
              </svg>
            </div>
            Logout
          </span>
        </div>
      </li>
    </ul>
    </>
  );
  const guestLinks = (
    //Creates the links that a guest user will see before they sign up or log in
    <>
    <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
    </ul>
    <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
      <li className="nav-item text-center mx-2 mx-lg-1">
        <span className="nav-link">
          <Link to="/login">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </div>
              Login
          </Link>
        </span>
      </li>
      <li className="nav-item text-center mx-2 mx-lg-1" >
        <div onClick={props.logout}>
        <span className="nav-link">
          <Link to="/register">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                  <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
              </div>
            Register
          </Link>
        </span>
        </div>
      </li>
    </ul>
    </>
  );

  return(
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">Delta</a> */}

          <a className="navbar-brand" href="/">Delta</a>
          <button className="btn me-auto" type="button" onClick={function(){changeClass()}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="navbar-collapse collapse" id="navbarToggleExternalContent">
            {isAuthenticated ? authLinks : guestLinks}
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
