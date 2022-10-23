<<<<<<< HEAD
import React, { Component } from 'react';
import {Link,Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {register} from '../../actions/auth';
import {createMessage} from "../../actions/messages"

export class Register extends Component {
  state = {
      username: '',
      email: '',
      first_name:'',
      last_name:'',
      password: '',
      password2:'',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    // pull the password and password2 from the state
    const {username,first_name,last_name,email,password, password2} = this.state;
    if(password != password2) {
      this.props.createMessage({passwordsDoNotMatch:'Passwords do not match'})
    }else{
      // format a new user
      const newUser = {
        first_name,
        last_name,
        username,
        password,
        email 
      }
      // call register action
      this.props.register(newUser);
    }
  }

  onChange = e => this.setState({ [e.target.name]:e.target.value });

  render() {
    // redirect if you are already logged in
    if(this.props.isAuthenticated){
      return <Navigate to="/"/>;
    }
    const {username, first_name,last_name,email, password, password2} = this.state;
    // form
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                onChange={this.onChange}
                value={first_name}
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
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <br/>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
=======
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from '../carousel/ImageCarousel'

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { username, email, password, password2 } = this.state

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            Image Carousel Goes Here
            <ImageCarousel />
          </div>
          <div className="col">
            <div className="card card-body mt-5">
              <h2 className='text-center'>Register</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label></label>
                  <input
                    type='text'
                    className='form-control'
                    name='username'
                    onChange={this.onChange}
                    value={username}
                    placeholder='Username'
                  />
                </div>

                <div className="form-group">
                  <label></label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    placeholder='Email'
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
                  <label></label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                    placeholder='Confirm Password'
                  />
                </div>

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

export default connect(
  mapStateToProps,
  {register,createMessage}
) (Register);
=======
export default Register

// ALL OF THIS GOES IN RENDER METHOD
// const { username, email, password, password2 } = this.state

    // return (
    //   <div className="col-md-6 m-auto">
    //     <div>Image carousel goes here!</div>

    //     <div className="card card-body mt-5">
    //       <h2 className="text-center">Register</h2>
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
    //           <label>Email</label>
    //           <input
    //             type="email"
    //             className="form-control"
    //             name="email"
    //             onChange={this.onChange}
    //             value={email}
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
    //           <label>Confirm Password</label>
    //           <input
    //             type="password"
    //             className="form-control"
    //             name="password2"
    //             onChange={this.onChange}
    //             value={password2}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <button type="submit" className="btn btn-primary">
    //             Register
    //           </button>
    //         </div>
    //         <p>
    //           Already have an account? <Link to="/login">Login</Link>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // )
>>>>>>> vince-web-login-reg-pages
