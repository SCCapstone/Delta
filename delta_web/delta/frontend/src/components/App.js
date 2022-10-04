import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header';
import Dashboard from './data/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';

import { Provider } from 'react-redux';
import store from "../store";
import { loadUser } from '../actions/auth';

// Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

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