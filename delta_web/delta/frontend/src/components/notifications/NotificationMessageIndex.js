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
        <div className="container">
            <h1>Message Notification</h1>
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