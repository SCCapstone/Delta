import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import axios from 'axios';

import NotificationReview from './NotificationReview';

const NotificationReviewIndex = (props) =>{
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
        <div className="container" data-testid="notification_review_index-1">
            <h1>Notifications</h1>
            <p>
              Here are all your notifications. At the moment, these deal primarily with reviews of your files.
            </p>
            <hr/>
            <div>
              {arrNotifications.map((objNotif,index)=>(
                <NotificationReview data = {objNotif} key={index}/>
              ))}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{})(NotificationReviewIndex);