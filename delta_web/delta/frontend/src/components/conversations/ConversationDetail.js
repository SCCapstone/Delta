import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import MessageForm from './MessageForm'

const ConversationDetail = (props) => {
    const {id} = useParams()

    const [convo, setConvo] = useState(null);

    const getConvo = () =>{
        axios.get(`/api/conversation/${id}/`,{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
        .then((res)=>{
            setConvo(res.data);
        })
    }

    const getMessages = () =>{

    }

    useEffect(()=>{
        getConvo()
    },[])
    if(convo == null) return;

  return (
    <div className="container">
        <h1>
            Conversation Detail
        </h1>
        <div class="border m-3 p-3">
            <h5>Title: {convo.title}</h5>
            <p>Published: {convo.pub_date}</p>
            <p>Other user: <Link to={`/profile/${convo.other_user_username}`}>{convo.other_user_username}</Link></p>
        </div>
        <div>
            <h5>Messages</h5>
            <div>

            </div>
            <MessageForm/>
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{})(ConversationDetail)