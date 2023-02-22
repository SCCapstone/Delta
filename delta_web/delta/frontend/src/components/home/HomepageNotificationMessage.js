import React, { useState } from "react";

const HomepageNotificationMessage = (props) => {
  return (
    <div className="container">
      <div className="p-3 d-flex align-items-center bg-light border-bottom">
        <div className="col mr-3">
          <div className="text-truncate">This is a notification</div>
          <div className="small">This is a notification again</div>
        </div>
        <div className="text-right text-muted pt-1">4d</div>
      </div>
    </div>
  );
};

export default HomepageNotificationMessage;
