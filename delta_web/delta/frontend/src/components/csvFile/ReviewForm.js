import React from 'react'
import Star from './Star';

import { useState } from 'react';

import styles from "./cssFile.module.css";
import { connect } from 'react-redux';
import { addReview } from '../../actions/review';

const ReviewForm = (props) => {
    const id = props.csvFileId;

    var [reviewState, setReviewState] = useState({
        'title':'',
        'text':'',
        'rating':5,
        'file':`${id}`,
        'author':`${props.auth.user.id}`
    });

    const onChange = (e) =>{
        const newState = {...reviewState,[e.target.name]:e.target.value}
        setReviewState(newState);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        props.addReview(reviewState);
        setTimeout(()=>{
            // refresh reviews
            props.handleSubmit();
        },200)
    }

    const RATINGS = ["Poor","Fair","Good","Very good","Excellent"]
    const [ratingIndex,setRatingIndex] = useState(4);
    const activeStar = {
        fill:'yellow'
    }
    const changeRatingIndex = (index) =>{
        setRatingIndex(index);
        const newState = {...reviewState,'rating':parseInt(index) + 1}
        setReviewState(newState);
    }

  return (
    <form onSubmit = {onSubmit}>
        <div className = "form-group">
            <div className="d-flex justify-content-between">
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
                <div>
                    <p>
                        Rating: {RATINGS[ratingIndex] ? RATINGS[ratingIndex] : 'No rating present yet.'}
                    </p>
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

export default connect(mapStateToProps,{addReview})(ReviewForm)