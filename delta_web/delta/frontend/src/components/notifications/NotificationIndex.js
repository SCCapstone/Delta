import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import axios from 'axios';

import NotificationReview from './NotificationReview';

const NotificationIndex = (props) =>{
    // notifications
    const [arrNotifications, setArrNotifications] = useState([]);

  // get notifications
  //
  const getNotifications = () =>{
    axios.get('/api/notification_review/get_unread',{headers:{'Content-Type':'application/json','Authorization': `Token ${props.auth.token}`}})
    .then((res)=>{
      setArrNotifications(res.data)
    })
  }
    useEffect(()=>{
        getNotifications()
    },[]);

    return (
        <div className="container">
            <h1>Notifications</h1>
            <hr/>
            <div>
              {arrNotifications.map((objNotif)=>(
                <NotificationReview data = {objNotif} />
              ))}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{})(NotificationIndex);