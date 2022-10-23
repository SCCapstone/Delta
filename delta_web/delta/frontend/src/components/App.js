import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {HashRouter as Router, Route,Routes, Redirect} from 'react-router-dom';
=======
import { HashRouter as Router, Route, Routes, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
>>>>>>> vince-web-login-reg-pages

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header';
import Dashboard from './data/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
<<<<<<< HEAD

// profile
/*
NOTE: 
ANYTHING THAT NEEDS MAP STATE DOES NOT USE SQUARE BRACKETS
https://stackoverflow.com/questions/70140588/const-authenticated-this-props-is-undefined-though-i-can-clearly-see-it-in
*/
import ProfileGlance from "./profile/ProfileGlance";
import {DetailedView as ProfileDetailed} from "./profile/DetailedView";
=======
>>>>>>> vince-web-login-reg-pages

// community
import {Personal as CommunityPersonal} from "./community/Personal"
import {Organizations as CommunityOrganizations} from "./community/Organizations"

// data page
import {DataDownload} from "./data_transfer/DataDownload";
import DataUpload from "./data_transfer/DataUpload";

// private routes
import PrivateRoute from './common/PrivateRoute';

import { createDispatchHook, Provider } from 'react-redux';
import store from "../store";
import { loadUser } from '../actions/auth';

import {loadUser} from '../actions/auth';

// Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

<<<<<<< HEAD
class App extends Component{
    // fire when main app is loaded
    componentDidMount(){
        store.dispatch(loadUser());
    };

    render(){
        return(
            <Provider store={store}>
                <AlertProvider template = {AlertTemplate}{...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header/>
                            <Alerts/>
                            <div className="container">
                                
                                <Routes>
                                    <Route exact path ="/" element= {
                                        <PrivateRoute>
                                            <Dashboard/>
                                        </PrivateRoute>
                                    }/>
                                    {/* Need to use private routes here */}
                                    <Route exact path ="/profile/glance" element={
                                        <PrivateRoute>
                                            <ProfileGlance/>
                                        </PrivateRoute>
                                    }/>
                                    <Route exact path ="/profile/detailed" element={
                                        <PrivateRoute>
                                            <ProfileDetailed/>
                                        </PrivateRoute>
                                    }/>
                                    <Route exact path ="/community/personal" element={
                                        <PrivateRoute>
                                            <CommunityPersonal/>
                                        </PrivateRoute>
                                    }/>
                                    <Route exact path ="/community/organizations" element={
                                        <PrivateRoute>
                                            <CommunityOrganizations/>
                                        </PrivateRoute>
                                    }/>

                                    <Route exact path ="/data/download" element={
                                        <PrivateRoute>
                                            <DataDownload></DataDownload>
                                        </PrivateRoute>
                                    }/>
                                    <Route exact path ="/data/upload" element={
                                        <PrivateRoute>
                                            <DataUpload/>
                                        </PrivateRoute>
                                    }/>

                                    
                                    <Route exact path ="/register"element={
                                        <Register/>
                                    }/>
                                    <Route exact path ="/login" element={
                                        <Login/>
                                    }/>
=======
class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}{...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Routes>
                                    <Route
                                        exact path='/'
                                        element={
                                            <PrivateRoute>
                                                <Dashboard />
                                            </PrivateRoute>}
                                    />
                                    <Route
                                        exact path='/register'
                                        element={<Register />}
                                    />
                                    <Route
                                        exact path='/login'
                                        element={<Login />}
                                    />
>>>>>>> vince-web-login-reg-pages
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));