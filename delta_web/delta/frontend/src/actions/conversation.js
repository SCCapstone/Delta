import axios from "axios"
import { tokenConfig } from "./auth"
import { createMessage } from "./messages"

export const addConversation = (dictData) => (dispatch,getState) =>{
    axios.post('/api/conversation/',dictData,tokenConfig(getState))
    .then((res)=>{
        dispatch(createMessage({addConversationSuccess:"Successfully created a conversation."}))
    })
    .catch((err)=>{
        console.log(err)
    })
}