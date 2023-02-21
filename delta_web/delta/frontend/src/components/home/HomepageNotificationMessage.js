import React, { useState } from "react";

const HomepageNotificationMessage = (props) => {
    
        return(
    <div class="p-3 d-flex align-items-center bg-light border-bottom">
                <div class="col mr-3">
                  <div class="text-truncate">Organization Update</div>
                  <div class="small">
                    Jacob Johnson has joined your organization "Valafar Lab"
                  </div>
                </div>
                <div class="text-right text-muted pt-1">3d</div>
              </div>
              <div class="p-3 d-flex align-items-center bg-light">
                <div class="col text-left mr-3">
                  <div class="text-truncate">Review on File</div>
                  <div class="small">
                    User test1234 has added a review to your file "upload544"
                  </div>
                </div>
                <div class="text-right text-muted pt-1">4d</div>
              </div>)
    }

}
