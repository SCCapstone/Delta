import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {updateUser} from "../../actions/auth"

export class ProfileForm extends Component{
    static propTypes = {
        auth:PropTypes.object.isRequired,
        updateUser:PropTypes.func.isRequired
    }

    state = {
        username: this.props.auth.user.username,
        first_name: this.props.auth.user.first_name,
        last_name: this.props.auth.user.last_name,
        email: this.props.auth.user.email,
        password:""
    }
    onChange = e => this.setState(
        {[e.target.name]:e.target.value}
    )
    onSubmit = e =>{
        e.preventDefault();
        const data = this.state;
        // call function
        this.props.updateUser(data);
    }

    render(){
        const {
            username,
            first_name,
            last_name,
            email,
            password
        } = this.state;
        const {isAuthenticated, user} = this.props.auth;

        return (
            <form onSubmit = {this.onSubmit}>
                <div>
                    First Name: 
                    <input
                    name = "first_name"
                    value = {this.state.first_name}
                    onChange={this.onChange}
                    placeholder={user.first_name}
                    >
                    </input>
                </div>
                <div>
                    Last Name:
                    <input
                    name = "last_name"
                    value = {this.state.last_name}
                    onChange = {this.onChange}
                    placeholder={user.last_name}
                    >
                    </input>
                </div>
                <div>
                    Email:
                    <input
                    name = "email"
                    value = {this.state.email}
                    onChange={this.onChange}
                    placeholder={user.email}
                    >
                    </input>
                </div>
                <div>
                    Username
                    <input 
                    name = "username"
                    value = {this.state.username}
                    onChange={this.onChange}
                    placeholder={user.username}
                    >
                    </input>
                </div>
                <div>
                    Password
                    <input
                    name = "password"
                    value = {this.state.password}
                    onChange = {this.onChange}
                    >
                    </input>
                </div>
                <button className="btn btn-success">
                    Update Information
                </button>
            </form>
        )
    }
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{updateUser})(ProfileForm);