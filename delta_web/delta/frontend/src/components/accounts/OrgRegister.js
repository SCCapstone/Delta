import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { createMessage } from "../../actions/messages"

export class OrgRegister extends Component {
  // handle state up here

  // validate org code or display message
  onSubmit = e => {
    // TODO write code here

    // pull state and validate
    // if bad data, display error message

    // else register org
  }

  render() {

    return (
      <div className="container">
        <h1 text-align='center'>Part of an Organization?</h1>
        <p>If you are part of an organization that uploads data, please enter the ogrganiation's code below.</p>
        <form action="">
          <div className='form-group'>
            <input
              type="text"
              className='form-control'
              name='org_code'
              placeholder='Enter Code Here'
              onChange={ } // send to the home page or display an error
              value={ } // code org goes here
            />
          </div>
          <br />
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit Code
            </button>
          </div>
          <br />
          <Link to='/login'>If you're not part of an organization, click here.</Link>
        </form>
      </div>

    )
  }
}