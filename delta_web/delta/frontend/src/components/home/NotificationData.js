/**
 * Delta Project
 *
 * Authors:
 * Lexington Whalen (@lxaw)
 * Carter Marlowe (@Cmarlowe123)
 * Vince Kolb-Lugo (@vancevince)
 * Blake Seekings (@j-blake-s)
 * Naveen Chithan (@nchithan)
 *
 * NotificationData.js
 *
 * Defines the individual card for notifications.
 * Takes in the title, notification detail, and date of the notification and
 * orients it.
 */
import React from "react";

// holds data for notifications
const NotificationData = (props) => {
  return (
    <div className="container">
      <div
        className="row align-items-center border rounded mx-5 my-2 bg-white"
        style={{ height: "37vh" }}
      >
        <div className="col-10 mr-3 px-5 pt-2">
          <div className="text-truncate">{props.notif.title}</div>
          <div className="small">{props.notif.text}</div>
        </div>
        <div className="col text-right text-center text-muted pt-1 pr-5">
          {props.notif.formatted_date}
        </div>
      </div>
    </div>
  );
};

export default NotificationData;
