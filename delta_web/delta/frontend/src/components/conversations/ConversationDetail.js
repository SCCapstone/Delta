import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import MessageForm from './MessageForm'
import MessageTable from './MessageTable'

const ConversationDetail = (props) => {
    const {id} = useParams()

    const [convo, setConvo] = useState(null);

    const getData = () =>{
        axios.get(`/api/conversation/${id}/`,{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
        .then((res)=>{
            setConvo(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    if(convo == null) return;

  return (
    <div className="container">
        <h1>
            Conversation Detail
        </h1>
        <div>
            <h5>Title: {convo.title}</h5>
            <p>Published: {convo.pub_date}</p>
            <p>Other user: <Link to={`/profile/${convo.other_user_username}`}>{convo.other_user_username}</Link></p>
        </div>
        <div>
            <h5>Messages</h5>
            <div>
                <MessageTable messages={convo.messages} user={props.auth.user}/>
            </div>
            <MessageForm convoId = {convo.id} 
            refresh={getData}
            otherUserUsername={convo.other_user_username}
            author_id={props.auth.user.id}
            />
        </div>
        <br/>
    </div>
  )
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{})(ConversationDetail)