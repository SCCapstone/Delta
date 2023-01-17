import {createMessage,returnErrors} from './messages';
import {tokenConfig} from './auth';
import axios from 'axios';
import { addNotification } from './notification';

export const addReview = (dictData) => (dispatch,getState) =>{
    axios.post('/api/review/',dictData,tokenConfig(getState))
    .then((res)=>{
        // create a notification
        axios.post('/api/notification_review/',{text:`Your file has been reviewed.`,sender:res.data['author'],recipient:res.data['recipient_id'],review:res.data['id']},tokenConfig(getState))
        .then(res=>{
            // maybe do something here

        })
        dispatch(createMessage({addReviewSuccess:"Your review has been posted."}))
    })
    .catch((err)=>{
        console.log(err);
        dispatch(createMessage({addReviewFail: "Failed to add review. User's can only add one review per file."}));
    })
}

export const deleteReview = (id) => (dispatch,getState) => {
    axios.delete(`api/review/${id}`,tokenConfig(getState))
    .then((res)=>{
        dispatch(createMessage({deleteReviewSuccess:"Your review has successfully been deleted."}));
    })
    .catch((err)=>{console.log(err)});
}