import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flexDirection: row;
`;

const LeftSide = styled.div`
    width: 25%;
`;

const RightSide = styled.div`
    width: 75%;
    
`;

export class ProfileGlance extends Component {
    static propTypes = {
        auth:PropTypes.object.isRequired
    }

    // need to get them
    getRegisteredOrgs(){
    }

    componentDidMount(){
        // get your registered orgs

    }

    render(){
        const {isAuthenticated, user} = this.props.auth;
        return(
            <div className='container'>
                <h1>
                    <center>Your Information</center>
                </h1>
                <Container>
                
                <LeftSide>
                <img
                    src="/media/closeup_african_american_woman.jpg"
                    className="d-block w-100"
                    alt="Close up of smiling African American woman"
                    width='400px'
                    height='100px'
                />
                </LeftSide>
                <div>
                    <RightSide>
                    <h4>First Name: {user.first_name}</h4>
                    <h4>Last Name: {user.last_name}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>Username: {user.username}</h4>
                    </RightSide>
                </div>
                
                </Container>
                <span>
                    <Link to="/profile/detailed">
                        click to see detailed
                    </Link>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps)(ProfileGlance);