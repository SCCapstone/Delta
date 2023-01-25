import React,{useState} from 'react'

const MessageForm = () => {
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
        alert('submit1')
    }

  return (
    <form onSubmit = {onSubmit}>
        <div className = "form-group">
            <label htmlFor="text">Start a message</label>
            <input className="form-control" id = "text"
            name="text"
            onChange = {onChange}
            />
        </div>
    </form>
  )
}

export default MessageForm