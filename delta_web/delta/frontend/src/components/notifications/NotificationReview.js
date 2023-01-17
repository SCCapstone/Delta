import React from 'react'
import { Link } from 'react-router-dom';

const NotificationReview = (props) => {

    const markRead = () =>{
        alert('TO DO');
    }

  return (
    <div className = "container border m-3 p-3">
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
            <div onClick={markRead}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                Got it
            </div>
        </div>
    </div>
  )
}

export default NotificationReview;