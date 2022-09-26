// proxy for a regular route, check to see if a user is logged in
// protects a url

import React from 'react'
import {Route, Navigate} from 'react-router-dom';
import {connect, Connect} from 'react-redux';
import PropTypes from "prop-types";

// takes in component to render, the auth state, and if anything else just lump in "rest"
const PrivateRoute = ({component:Component,auth,...rest}) => (
    <Route
        {...rest}
        render={props=>{
            if(auth.isLoading){
                return <h2>Loading...</h2>
            }else if(!auth.isAuthenticated){
                return <Navigate to="/login" />;
            }else{
                return <Component {...props}/>;
            }
        }}
    />
);

const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
