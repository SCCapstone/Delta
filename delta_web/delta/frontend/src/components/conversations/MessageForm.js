import React,{useState} from 'react'
import { connect } from 'react-redux';
import { addMessage } from '../../actions/convo_message'

const MessageForm = (props) => {
    const convoId = props.convoId;
    const otherUserUsername = props.otherUserUsername
    const userId = props.author_id

    const [messageText,setMessageText] = useState('');

    const onChange = (e) =>{
        setMessageText(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        props.addMessage({text:messageText,
            other_user_username:otherUserUsername,
            convo_id:convoId,
            author_id:userId
        })
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
        <br/>
        <button className="btn btn-outline-success">
            Send
        </button>
    </form>
  )
}


export default connect(null,{addMessage})(MessageForm)