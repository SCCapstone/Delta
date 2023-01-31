import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ConversationForm from '../conversations/ConversationForm'
import { connect } from 'react-redux'
import ConversationTable from '../conversations/ConversationTable'
import axios from 'axios'

const PublicProfile = (props) => {

  const [convos,setConvos] = useState(null)

  // public profile that you are viewing's username
  const {username} = useParams()

  useEffect(()=>{
    axios.post('/api/conversation/get_convos_with_user/',{other_user_username:username},{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
    .then((res)=>{setConvos(res.data)})
  },[])

  // hasn't loaded yet
  if(convos == null) return;

  return (
    <div className="container">
      <h1>
        {username}'s profile
      </h1>
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