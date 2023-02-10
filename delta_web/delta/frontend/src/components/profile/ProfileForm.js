import React,{useState} from 'react'
import { connect } from 'react-redux';
import {updateUser} from "../../actions/auth"
import OrganizationThumbnail from './OrganizationThumbnail';

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
            organizations:props.auth.user.followed_organizations,
            newOrgKey:""
        }
    );


    const onChange = (e) => {
        const newState = {...userInfo,[e.target.name]: e.target.value};
        setUserInfo(newState);
    }

    const parentOnRemoveOrg = (orgObj) =>{
        const newOrgs = userInfo['organizations'].filter(item => item !== orgObj )
        setUserInfo({...userInfo,['organizations']:newOrgs})
    }

    const parentOnPutBackOrg = (orgObj) =>{
        const newOrgs = userInfo['organizations'].concat(orgObj)
        setUserInfo({...userInfo,['organizations']:newOrgs})
    }

    /* 
    * This defines the actions on what happens when a user click on the submit button.
    * The function gets called and updates the users information.
    */
    const onSubmit = (e) =>{
        e.preventDefault()
        props.updateUser(userInfo);
    }
    console.log(props.auth.user.followed_organizations.length);
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
                <textarea
                className="form-control"
                name="bio"
                placeholder={userInfo.bio}
                onChange={onChange}
                />
            </div>
            <br/>
            <h5>Currently followed organizations</h5>
            <div>
                { props.auth.user.followed_organizations.length === 0 ? <p> Not part of any Organizations</p> :
                    props.auth.user.followed_organizations.map(orgObj => (
                        <OrganizationThumbnail org={orgObj} 
                        parentOnPutBackOrg={parentOnPutBackOrg} 
                        parentOnRemoveOrg={parentOnRemoveOrg} 
                        />
                ))}
            </div>
            <h5>Add organization</h5>
            <div>
                <input
                    type=""
                    className="form-control"
                    name="newOrgKey"
                    onChange={onChange}
                    value={userInfo.newOrgKey}
                    placeholder="Or leave blank if not adding an organization"
                />
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