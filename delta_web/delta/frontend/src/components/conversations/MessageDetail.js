import React from 'react';
import {Link} from 'react-router-dom';

const MessageDetail = (props) => {
    /*
    Expects:
    author_username
    text
    date
    */
  return (
    <div className="border m-3 p-2 rounded">
        <div className = "row">
          <small> Sent by <Link to={`/profile/${props.author_username}`}>{props.author_username}</Link> at {props.date}</small>
        </div>
        {props.text} 
    </div>
  )
}

export default MessageDetail