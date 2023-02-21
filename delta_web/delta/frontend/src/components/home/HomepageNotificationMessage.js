import React, { useState } from "react";

const HomepageNotificationMessage = (props) => {
  return (
    <div className="container">
      <div className="p-3 d-flex align-items-center bg-light border-bottom">
        <div className="col mr-3">
          <div className="text-truncate">Organization Update</div>
          <div className="small">
            Jacob Johnson has joined your organization "Valafar Lab"
          </div>
        </div>
        <div className="text-right text-muted pt-1">3d</div>
      </div>
      <div className="p-3 d-flex align-items-center bg-light">
        <div className="col text-left mr-3">
          <div className="text-truncate">Review on File</div>
          <div classNme="small">
            User test1234 has added a review to your file "upload544"
          </div>
        </div>
        <div className="text-right text-muted pt-1">4d</div>
      </div>
    </div>
  );
};

export default HomepageNotificationMessage;
