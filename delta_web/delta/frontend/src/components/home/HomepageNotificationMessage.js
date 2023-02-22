import React, { useState } from "react";

const HomepageNotificationMessage = (props) => {
  return (
    <div className="container">
      <div className="mx-5 d-flex align-items-center bg-light border-bottom">
        <div className="col-6 mr-3 px-5">
          <div className="text-truncate">{props.notificationTitle}</div>
          <div className="small">{props.notificationMessage}</div>
        </div>
        <div className="col text-right text-muted pt-1 pr-5">{props.date}</div>
      </div>
    </div>
  );
};

export default HomepageNotificationMessage;
