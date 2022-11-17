import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const LeftSide = styled.div`
    max-width:100px
    
    flex: 1;
`;

const RightSide = styled.div`
    flex: 1;
    padding-left:10px;
`;

const Name = styled.h4`
    padding: 5px;
`;

// const tink = ({ className, children }) => (
//     <a className={className}>
//       {children}
//     </a>
//   );

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
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
                    width='100px'
                    height='100px'
                />
                </LeftSide>
                <div>
                    <RightSide>
                        <Name>First Name: {user.first_name}</Name>
                        <Name>Last Name: {user.last_name}</Name>
                        
                    </RightSide>
                </div>
                
                </Container>
                <h4>Email: {user.email}</h4>
                <h4>Username: {user.username}</h4>
                <span>
                    <StyledLink to="/profile/detailed">
                        click to see detailed
                    </StyledLink>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth:state.auth
});

export default connect(mapStateToProps)(ProfileGlance);