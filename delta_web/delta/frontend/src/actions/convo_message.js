
import axios from 'axios'
import React from 'react'
import { tokenConfig } from './auth'
import { createMessage } from './messages'

export const addMessage = (dictData) => (dispatch,getState) => {
    /*
    dictData must have:
    text: str of text of message
    other_user_username: username of other user
    convo_id: id of convo
    author_id: id of author
    */
   axios.post('/api/message/',dictData,tokenConfig(getState))
   .then((res)=>{
        dispatch(createMessage({addMessageSuccess:"Successfully sent message."}))
   })
   .catch((err)=>{
        console.log(err)
   })
}
