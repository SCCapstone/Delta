import axios from "axios";
import { tokenConfig } from "./auth";
import { createMessage } from "./messages";

export const addNotification = (notificationData) => (dispatch,getState) => {
    axios.post('/api/notification_review/',notificationData,tokenConfig(getState))
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err)
    })
}
export const markRead = (notificationId) => (dispatch,getState) => {
    axios.get(`/api/notification_review/${notificationId}/perform_read/`,tokenConfig(getState))
    .then((res)=>{
        dispatch(createMessage({readNotification:"Notification has been read."}))
    })
    .catch((err)=>{console.log(err)})
}