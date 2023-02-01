import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addConversation } from '../../actions/conversation'
import MessageForm from './MessageForm'

const ConversationForm = (props) => {

    if(props.auth.user.id == undefined){
        return null;
    }

    const [conversationState,setConversationState]=useState({
        author:props.auth.user.id,
        title:'',
        other_user_username: useParams()['username'],
    })

    const onChange = (e) =>{
        const newState = {...conversationState,[e.target.name]:e.target.value}
        setConversationState(newState);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        props.addConversation(conversationState) 
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

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{addConversation})(ConversationForm)