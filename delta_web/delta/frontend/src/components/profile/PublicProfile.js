import React from 'react'
import { useParams } from 'react-router-dom'
import ConversationForm from '../conversations/ConversationForm'

const PublicProfile = (props) => {
  const {username} = useParams()
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
    </div>
  )
}

export default PublicProfile