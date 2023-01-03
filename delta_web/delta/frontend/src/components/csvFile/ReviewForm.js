import React from 'react'
import Star from './Star';

import { useState } from 'react';

import styles from "./cssFile.module.css";
import axios from 'axios';
import { connect } from 'react-redux';



const ReviewForm = (props) => {
    const id = props.csvFileId;
    console.log(props.auth)

    var [reviewState, setReviewState] = useState({
        'title':'',
        'text':'',
        'rating':0,
        'author':`${props.auth.user.id}`
    });

    const onChange = (e) =>{
        const newState = {...reviewState,[e.target.name]:e.target.value}
        setReviewState(newState);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify(reviewState)

        var config = {
            method: 'post',
            url: '/api/review/',
            headers: { 
                'Authorization': `Token ${props.auth.token}`, 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const RATINGS = ["Poor","Fair","Good","Very good","Excellent"]
    const [ratingIndex,setRatingIndex] = useState();
    const activeStar = {
        fill:'yellow'
    }
    const changeRatingIndex = (index) =>{
        setRatingIndex(index);
        const newState = {...reviewState,'rating':parseInt(index) + 1}
        setReviewState(newState);
        console.log(reviewState);
    }

  return (
    <form onSubmit = {onSubmit}>
        <div className = "form-group">
            <label htmlFor = "rating">Rating</label>
            <div className="container">
            <h1 className="result">{ RATINGS[ratingIndex] ? RATINGS[ratingIndex] : 'You didn\'t review yet'}</h1>
            <div className={styles.stars}>
                {
                    RATINGS.map((rating, index) => (
                        <Star 
                            index={index} 
                            key={rating} 
                            changeRatingIndex={changeRatingIndex}
                            style={ ratingIndex >= index ? activeStar : {}}
                        />
                    ))
                }
            </div>
            </div>
        </div>
        <div className = "form-group">
            <label htmlFor = "title">Title</label>
            <input className = "form-control" id = "title"
            name="title"
            onChange = {onChange}
            />
            <small id = "titleHelp">Add a descriptive title.</small>
        </div>
        <div className = "form-group">
            <label htmlFor = "description">Description</label>
            <input type="text" className = "form-control" id = "description"
            onChange = {onChange}
            name = "text"
            />
            <small id = "descriptionHelp">Add a description.</small>
        </div>
        <button type="submit" className="btn btn-outline-success">
            Submit
        </button>
    </form>
  )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{})(ReviewForm)