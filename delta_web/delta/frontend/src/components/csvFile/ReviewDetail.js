import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ReviewDetail = (props) => {

    if(props.auth.user.id == undefined) return;

    const [reviewData,setReviewData] = useState(null);

    const {id} = useParams();

    const getData = () =>{
        axios.get(`/api/review/${id}`,{headers:{"Content-Type":'application/json','Authorization':`Token ${props.auth.token}`}})
        .then((res)=>{
            console.log(res.data)
            setReviewData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData();
    },[])

    if(reviewData == null) return;

    return(
        <div className="container">
            <h1>{reviewData.title}</h1>
            <p>{reviewData.text}</p>
            <div>{count}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{})(ReviewDetail)