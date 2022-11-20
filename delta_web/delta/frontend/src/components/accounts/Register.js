import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { register } from '../../actions/auth';
import { createMessage } from "../../actions/messages"
import ImageCarousel from "../carousel/ImageCarousel"

export class Register extends Component {
  state = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password2: '',
    organization_key: '',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    // pull the password and password2 from the state
    const { username, first_name, last_name, email, password, password2, organization_key } = this.state;
    if (password != password2) {
      this.props.createMessage({ passwordsDoNotMatch: 'Passwords do not match' })
    } else if(first_name === '' || last_name === '' || email === ''){
      this.props.createMessage({ passwordsDoNotMatch: 'Please fill all fields' })
    }
      else {
      // format a new user
      const newUser = {
        username,
        first_name,
        last_name,
        password,
        email,
        organization_key
      }
      // call register action
      this.props.register(newUser);
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // redirect if you are already logged in
    if (this.props.isAuthenticated) {
      return <Navigate to="/" />;
    }
    const { username, first_name, last_name, email, password, password2, organization_key } = this.state;
    // form
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ImageCarousel />
          </div>

          <div className="col">
            <div className="card card-body mt-5">
              <h2 className="text-center" style={{ backgroundColor: '#86c5d8' }}>Register</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    onChange={this.onChange}
                    value={first_name}
                    style={{ backgroundColor: '#f5fcff' }}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    onChange={this.onChange}
                    value={last_name}
                    style={{ backgroundColor: '#f5fcff' }}
                  />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                    style={{ backgroundColor: '#f5fcff' }}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    style={{ backgroundColor: '#f5fcff' }}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    style={{ backgroundColor: '#f5fcff' }}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                    style={{ backgroundColor: '#f5fcff' }}
                  />
                </div>
                <div className="form-group">
                  <label>Organization Key</label>
                  <input
                    type=""
                    className="form-control"
                    name="organization_key" // needs to change to organization
                    onChange={this.onChange}
                    value={organization_key} // needs to change to organization
                    placeholder="Or leave blank if not a part of an organization."
                    style={{ backgroundColor: '#f5fcff' }}
                  />
                </div>
                <br />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { register, createMessage }
)(Register);
