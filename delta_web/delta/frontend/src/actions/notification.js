import axios from "axios";
import { tokenConfig } from "./auth";

export const addNotification = (notificationData) => (dispatch,getState) => {
    axios.post('/api/notification_review/',notificationData,tokenConfig(getState))
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err)
    })
}