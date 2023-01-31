import React from 'react'

const MessageDetail = (props) => {
    /*
    Expects:
    author_username
    text
    date
    */
  return (
    <div class="border m-3 p-3">
        {props.text} 
    </div>
  )
}

export default MessageDetail