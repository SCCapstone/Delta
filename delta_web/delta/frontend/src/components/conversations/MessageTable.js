import React from 'react'
import MessageDetail from './MessageDetail';

const MessageTable = (props) => {
  // assumes that there is a props.user representing the user object
  // needs an array of message objs
  if(props.messages == undefined) return null;

  return (
    <div>
        {props.messages.map((item,index)=>(
            <div key = {index}>
                {item.author_username == props.user.username ? 
                // You 
                <div
                    className="d-flex flex-row-reverse"
                >
                    <MessageDetail author_username={item.author_username} date={item.pub_date} text={item.text}/>
                </div>
                :
                // Other person
                <div
                    className="d-flex flex-row"
                >
                    <MessageDetail author_username={item.author_username} date={item.pub_date} text={item.text}/>
                </div>
                }
            </div>
        ))}        
    </div>
  )
}

export default MessageTable