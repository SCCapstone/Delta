import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ConversationForm from '../conversations/ConversationForm'
import { connect } from 'react-redux'
import ConversationTable from '../conversations/ConversationTable'
import axios from 'axios'
import "./profile.css"
import ProfileSidebar from './ProfileSidebar';

const PublicProfile = (props) => {

  const [convos, setConvos] = useState(null)
  const [userData, setUserData] = useState(null)

  // public profile that you are viewing's username
  const { username } = useParams()

  const getConvos = () => {
    axios.post('/api/conversation/get_convos_with_user/', { other_user_username: username }, { headers: { 'content-type': 'application/json', 'authorization': `token ${props.auth.token}` } })
      .then((res) => {
        setConvos(res.data)
      }
      )
      .catch((err) => {
        console.log(err)
      })
  }
  // get public user data
  const getUserData = () => {
    axios.post('/api/user/get_user/', { username: username }, { headers: { 'content-type': 'application/json', 'authorization': `token ${props.auth.token}` } })
      .then((res) => {
        setUserData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getConvos();
    getUserData()
  }, [])

  // hasn't loaded yet
  if (convos == null || userData == null) return;

  return (
    <div className="container">
      <div className='row'>
        <ProfileSidebar
          first_name={props.auth.user.first_name}
          last_name={props.auth.user.last_name}
          email={props.auth.user.email}
          username={props.auth.user.username}
        />
        <div className='profile-info col-md-9'>
          <div>
            <h1>
              {username}'s profile
            </h1>
            <div>
              <i>
                {userData.bio}
              </i>
            </div>
          </div>
          <hr />

          <div>
            {
              props.auth.user.username == username ?
                <div>
                  <p>This is how you appear to others.</p>
                  <Link to="/profile/glance" className="btn btn-primary">
                    See your private profile
                  </Link>
                </div>
                :
                <div>
                  <h4>Start a Conversation?</h4>
                  <ConversationForm />
                  <h4>Past Conversations</h4>
                  <ConversationTable convos={convos} />
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(PublicProfile)