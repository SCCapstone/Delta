import React, { useState } from "react";

const HomepageNotificationMessage = (props) => {
  return (
    <div className="container">
      <div className="p-3 d-flex align-items-center bg-light border-bottom">
        <div className="col mr-3">
          <div className="text-truncate">{props.title}</div>
          <div className="small">{props.notificationMessage}</div>
        </div>
        <div className="text-right text-muted pt-1">{props.date}</div>
      </div>
    </div>
  );
};

export default HomepageNotificationMessage;
