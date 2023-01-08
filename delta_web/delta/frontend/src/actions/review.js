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
        dispatch(createMessage({addReviewFail: err.response.data.message}));
    })
}