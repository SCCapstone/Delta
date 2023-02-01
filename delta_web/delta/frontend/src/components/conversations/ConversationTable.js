import React from 'react'
import { Link } from 'react-router-dom';

const ConversationTable = (props) => {
    if(props.convos == undefined) return null;
  return (
    <div>
        {props.convos.map((item,index)=>(
            <div key={index}>
                <Link to = {`/messages/conversations/${item.id}`}>
                    {item.title}
                </Link>
            </div>
        ))}
    </div>
  )
}

export default ConversationTable;