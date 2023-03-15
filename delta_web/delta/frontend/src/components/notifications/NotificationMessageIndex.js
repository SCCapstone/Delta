import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import axios from 'axios';

import NotificationMessage from './NotificationMessage';

const NotificationMessageIndex = (props) =>{
    // notifications
    const [arrNotifications, setArrNotifications] = useState([]);

  // get notifications
  //
  const getNotifications = () =>{
    axios.get('/api/notification_message/get_unread',{headers:{'Content-Type':'application/json','Authorization': `Token ${props.auth.token}`}})
    .then((res)=>{
      setArrNotifications(res.data)
    })
  }
    useEffect(()=>{
        getNotifications()
    },[]);

    return (
        <div className="container" data-testid="notification_message_index-1">
            <h1>Notifications of Messages</h1>
            <p>
              Here are all your messages. You can view the user who sent you the message by clicking their username, and
              you can see the contents of the message by clicking "See message".
              
              To remove the notification, click "Got it".
            </p>
            <hr/>
            <div>
              {arrNotifications.map((objNotif,index)=>(
                <NotificationMessage data = {objNotif} key={index}/>
              ))}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{})(NotificationMessageIndex);