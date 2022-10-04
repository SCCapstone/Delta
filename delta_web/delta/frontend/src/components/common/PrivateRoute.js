/**
 * 
 * This is a functional component.
 */

import React from "react"
import { Route, Navigate } from "react-router-dom"
import { connect, Connect } from "react-redux"
import PropTypes from "prop-types"

const PrivateRoute = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? children : <Navigate to='/login' />
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)