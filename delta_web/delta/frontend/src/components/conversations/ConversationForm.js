import React, { useState } from 'react'
import MessageForm from './MessageForm'

const ConversationForm = () => {

    const [conversationState,setConversationState]=useState({
        title:'',
        other_user:'',
    })

    const onChange = (e) =>{
        const newState = {...conversationState,[e.target.name]:e.target.value}
        setConversationState(newState);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        alert('submit')
    }

  return (
    <form onSubmit = {onSubmit}>
        <div className = "form-group">
            <label htmlFor="title">Conversation Title</label>
            <input className="form-control" id = "title"
            name="title"
            onChange = {onChange}
            />
            <small id="titleHelp">In order to begin messaging, you must first start a conversation. The conversation title should be related to what the following messages will be about.</small>
        </div>
        <button type="submit" className="btn btn-outline-success">
            Submit
        </button>
    </form>
  )
}

export default ConversationForm