import {createMessage,returnErrors} from './messages';
import {tokenConfig} from './auth';
import axios from 'axios';

export const addReview = (dictData) => (dispatch,getState) =>{
    axios.post('/api/review/',dictData,tokenConfig(getState))
    .then((res)=>{
        dispatch(createMessage({addReviewSuccess:"Your review has been posted."}))
    })
    .catch((err)=>{
        console.log(err);
        dispatch(createMessage({addReviewFail: "Failed to add review."}));
    })
}

export const deleteReview = (id) => (dispatch,getState) => {
    axios.delete(`api/review/${id}`,tokenConfig(getState))
    .then((res)=>{
        dispatch(createMessage({deleteReviewSuccess:"Your review has successfully been deleted."}));
    })
    .catch((err)=>{console.log(err)});
}

export const updateReview = (data) => (dispatch,getState) =>{
    // data expects
    /*
    id: id of review
    title: title of review
    text: text of review
    rating: int rating of review
    */
    axios.patch(`api/review/${data.id}/`,data,tokenConfig(getState))
    .then((res)=>{
        console.log(res);
        dispatch(createMessage({updateReviewSuccess:"Your review has successfully been updated."}))
    })
    .catch((err)=>{
        console.log(err)
    })
}