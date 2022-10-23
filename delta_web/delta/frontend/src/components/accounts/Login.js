import React, { Component } from 'react';
<<<<<<< HEAD
import {Link,Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {login} from '../../actions/auth';

export class Login extends Component {
  state = {
      username: '',
      password: '',
  };
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username,this.state.password);
  }

  onChange = e => this.setState({ [e.target.name]:e.target.value });

  render() {
    // if logged in, redirect
    if(this.props.isAuthenticated){
      return <Navigate to = "/"/>
    }
    const {username, password} = this.state;
    // form
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
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
              />
            </div>
            <br/>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
=======
import { Link } from 'react-router-dom';
import ImageCarousel from '../carousel/ImageCarousel';

export class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { username, password } = this.state

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            Image Carousel Goes Here
            <ImageCarousel />
          </div>
          <div className="col">
            <div className="card card-body mt-5">
              <h2 className='text-center'>Login</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label></label>
                  <input
                    type='text'
                    className='form-control'
                    name='username'
                    onChange={this.onChange}
                    value={this.username}
                    placeholder='Username'
                  />
                </div>

                <div className="form-group">
                  <label></label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    placeholder='Password'
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
>>>>>>> vince-web-login-reg-pages
        </div>
      </div>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,{login}) (Login);
=======
export default Login

// const { username, password } = this.state

    // return (
    //   <div className="col-md-6 m-auto">
    //     <div>Image carousel goes here!</div>
    //     <div className="card card-body mt-5">
    //       <h2 className="text-center">Login</h2>
    //       <form onSubmit={this.onSubmit}>
    //         <div className="form-group">
    //           <label>Username</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             name="username"
    //             onChange={this.onChange}
    //             value={username}
    //           />
    //         </div>

    //         <div className="form-group">
    //           <label>Password</label>
    //           <input
    //             type="password"
    //             className="form-control"
    //             name="password"
    //             onChange={this.onChange}
    //             value={password}
    //           />
    //         </div>

    //         <div className="form-group">
    //           <button type="submit" className="btn btn-primary">
    //             Login
    //           </button>
    //         </div>
    //         <p>
    //           Don't have an account? <Link to="/register">Register</Link>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // )
>>>>>>> vince-web-login-reg-pages
