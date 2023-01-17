import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import axios from 'axios';

const NotificationIndex = (props) =>{
    // notifications
    const [arrNotifications, setArrNotifications] = useState([]);

  // get notifications
  //
  const getNotifications = () =>{
    console.log('here')
    axios.get('/api/notification_review/',{headers:{'Content-Type':'application/json','Authorization': `Token ${props.auth.token}`}})
    .then((res)=>{
      setArrNotifications(res.data)
      console.log(res.data);
    })
  }
    useEffect(()=>{
        getNotifications()
    },[]);
    return (
        <div className="container">
            <h1>Notifications</h1>
        </div>
    )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{})(NotificationIndex);