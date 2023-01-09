import React from 'react'
import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review';

import StarSvg from "./StarSvg"

const Review = (props) => {

  const activeStar = {fill:'yellow'};

  var arrStars = []
  for(let i=0;i< 5;i++){
    arrStars.push(
      <StarSvg
        style = {i < props.reviewData.rating ? activeStar : {}}
      />
    )
  }

  const handleDelete = (e) =>{
    props.deleteReview(props.reviewData.id);
    props.refreshReviews();
  }

  return (
    <div className ="container border p-3">
        <div className="d-flex flex-row">
          {arrStars.map((starSvg)=>(
            starSvg
          ))}
        </div>
        <h4>{props.reviewData.title}</h4>
        <div className="d-flex justify-content-between">
          <p>Reviewed by {props.reviewData.author_username}</p>
          <p>{props.reviewData.pub_date}</p>
        </div>
        <hr/>
        <div>
          <p>
            {props.reviewData.text}
          </p>
        </div>
        {}
        <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-outline-success">Edit</button>
            <button className="btn btn-sm btn-outline-danger"
              onClick={handleDelete}
            >
              Delete
              </button>
        </div>
    </div>
  )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{deleteReview})(Review)