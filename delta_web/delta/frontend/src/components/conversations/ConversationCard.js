import React from 'react'
import { Link } from 'react-router-dom'

const ConversationCard = (props) => {
    /*
    Takes in a conversation object, or a serialized 
    */
  return (
    <div className="container border border-rounded p-3">
        <p>
            {props.convoObj.pub_date}
        </p>
        <p>
            {props.convoObj.title}
        </p>
        <Link to={`/messages/conversations/${props.convoObj.id}`}>
            View
        </Link>
    </div>
  )
}

export default ConversationCard