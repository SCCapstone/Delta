import React from "react";
import { connect } from "react-redux";
import { markReadNotificationNews } from "../../actions/notification";
import NotificationData from "./NotificationData";

const NotificationNews = (props) => {

  const performRead = () =>{
    props.markReadNotificationNews(props.notif.id);
    props.parentRemoveNotif(props.notif.id)
  }

  return (
    <div>
      <NotificationData
        notif={props.notif}
      />
      <div>
        <button onClick={performRead}>
          Got it!
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>({
  auth:state.auth
})

export default connect(mapStateToProps,{markReadNotificationNews})(NotificationNews);