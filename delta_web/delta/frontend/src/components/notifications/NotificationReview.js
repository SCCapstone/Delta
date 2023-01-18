import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { markRead } from '../../actions/notification';

const NotificationReview = (props) => {

    const [style,setStyle] = useState({});

    const handleRead = () =>{
        props.markRead(props.data.id)
        setStyle({display:'none'})
    }

  return (
    <div className = "container border m-3 p-3" style={style}>
        <div className="d-flex justify-content-between">
            <div>
                <strong>Notification from {props.data.sender_username}</strong>
            </div>
            <div>
                <p>{props.data.formatted_date}</p>
            </div>
        </div>
        <div>
            <p>
                {props.data.text}
            </p>
        </div>
        <div>
            <Link to = {`/csvs/${props.data.file_id}`}>
                See file
            </Link>
        </div>
        <div>
            <div onClick={handleRead}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                Got it
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{markRead},)(NotificationReview);