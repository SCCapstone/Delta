import React, { useState } from "react";

const HomepageNotificationMessage = (props) => {
  return (
    <div className="container">
      <div className="mx-5 d-flex align-items-center bg-light border-bottom">
        <div className="col-6 mr-3 px-5">
          <div className="text-truncate">This is a notification</div>
          <div className="small">This is a notification again</div>
        </div>
        <div className="col text-right text-muted pt-1 pr-5">4d</div>
      </div>
    </div>
  );
};

export default HomepageNotificationMessage;
