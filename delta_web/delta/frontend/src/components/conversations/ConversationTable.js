import React from 'react'
import { Link } from 'react-router-dom';
import ConversationCard from './ConversationCard';

const ConversationTable = (props) => {
    if(props.convos == undefined) return null;
    console.log(props.convos)
  return (
    <div>
        {props.convos.map((item,index)=>(
            <ConversationCard
                key={index}
                convoObj={item}
            />
        ))}
    </div>
  )
}

export default ConversationTable;