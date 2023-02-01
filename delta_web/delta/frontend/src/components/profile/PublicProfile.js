import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ConversationForm from '../conversations/ConversationForm'
import { connect } from 'react-redux'
import ConversationTable from '../conversations/ConversationTable'
import axios from 'axios'

const PublicProfile = (props) => {

  const [convos,setConvos] = useState(null)
  const [userData,setUserData] = useState(null)

  // public profile that you are viewing's username
  const {username} = useParams()

  const getConvos = () =>{
    axios.post('/api/conversation/get_convos_with_user/',{other_user_username:username},{headers:{'content-type':'application/json','authorization':`token ${props.auth.token}`}})
    .then((res)=>{
      setConvos(res.data)
      }
    )
    .catch((err)=>{
      console.log(err)
    })
  }
  // get public user data
  const getUserData = () =>{
    axios.post('/api/user/get_user/',{username:username},{headers:{'content-type':'application/json','authorization':`token ${props.auth.token}`}})
    .then((res)=>{
      setUserData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getConvos();
    getUserData()
  },[])

  // hasn't loaded yet
  if(convos == null || userData == null) return;

  return (
    <div className="container">
      <div>
        <h1>
          {username}'s profile
        </h1>
        <div>
          {userData.bio}
        </div>
      </div>
      <hr/>
      <div>
        <h4>Start a Conversation?</h4>
        <ConversationForm/>
      </div>
      <div>
        <h4>Past Conversations</h4>
        <ConversationTable convos={convos} />
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{})(PublicProfile)