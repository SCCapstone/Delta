import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Routes, Redirect} from 'react-router-dom';

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header';
import Dashboard from './data/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from "../store";

// Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component{
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
                                    <PrivateRoute exact path ="/" element= {<Dashboard/>} />
                                    <Route exact path ="/register"element={<Register/>}/>
                                    <Route exact path ="/login" element={<Login/>}/>
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )     
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));