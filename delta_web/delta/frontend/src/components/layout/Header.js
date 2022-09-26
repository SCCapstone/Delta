// navbar
import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Header extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Delta Web</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item active">
                    <Link to="/register"
                    className ="nav-link">
                    Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Login"
                    className ="nav-link">
                    Login
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}

export default Header