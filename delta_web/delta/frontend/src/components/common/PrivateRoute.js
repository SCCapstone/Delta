// proxy for a regular route, check to see if a user is logged in
// protects a url

import React from 'react'
import {Route, Navigate} from 'react-router-dom';
import {connect, Connect} from 'react-redux';
import PropTypes from "prop-types";

// see: https://stackoverflow.com/questions/69923420/how-to-use-private-route-in-react-router-domv6
const PrivateRoute = ({auth:{isAuthenticated},children}) => {
    /*
    THIS IS LIKELY WHY EVERYTHING GOES BACK TO LOGIN
    */
    return isAuthenticated ? children : <Navigate to = "/login"/>;
}

const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
