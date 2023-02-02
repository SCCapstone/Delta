import React,{useState} from 'react'
import { connect } from 'react-redux';
import {updateUser} from "../../actions/auth"

const ProfileForm = (props) => {

    if(props.auth.user.username == null) return;

    const [userInfo,setUserInfo] = useState(
        {
            username:props.auth.user.username,
            first_name:props.auth.user.first_name,
            last_name:props.auth.user.last_name,
            email:props.auth.user.email,
            bio:props.auth.user.bio,
            password:"",
        }
    );

    const onChange = (e) => {
        const newState = {...userInfo,[e.target.name]: e.target.value};
        setUserInfo(newState);
    }
    /* 
    * This defines the actions on what happens when a user click on the submit button.
    * The function gets called and updates the users information.
    */
    const onSubmit = (e) =>{
        e.preventDefault()
        props.updateUser(userInfo);
    }
    //This form allows for edited information to be submitted to the backend
    return (
        <form onSubmit = {onSubmit}>
            <div>
                First Name: 
                <input
                name = "first_name"
                value = {userInfo.first_name}
                onChange={onChange}
                className = "form-control"
                placeholder={userInfo.first_name}
                >
                </input>
            </div>
            <div>
                Last Name:
                <input
                className="form-control"
                name = "last_name"
                value = {userInfo.last_name}
                onChange = {onChange}
                placeholder={userInfo.last_name}
                >
                </input>
            </div>
            <div>
                Email:
                <input
                className="form-control"
                name = "email"
                value = {userInfo.email}
                onChange={onChange}
                placeholder={userInfo.email}
                >
                </input>
            </div>
            <div>
                Username:
                <input 
                className="form-control"
                name = "username"
                value = {userInfo.username}
                onChange={onChange}
                placeholder={userInfo.username}
                >
                </input>
            </div>
            <div>
                Password:
                <input
                className="form-control"
                name = "password"
                placeholder="Or enter nothing if no change"
                value = {userInfo.password}
                onChange = {onChange}
                >
                </input>
            </div>
            <div>
                Bio:
                <input
                className="form-control"
                name="bio"
                placeholder={userInfo.bio}
                onChange={onChange}
                >
                </input>
            </div>
            <br/>
            <button className="btn btn-success">
                Update Information
            </button>
        </form>
    )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{updateUser})(ProfileForm);