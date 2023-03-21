/**
 * Delta Project
 *
 * Authors:
 * Lexington Whalen (@lxaw)
 * Carter Marlowe (@Cmarlowe123)
 * Vince Kolb-Lugo (@vancevince)
 * Blake Seekings (@j-blake-s)
 * Naveen Chithan (@nchithan)
 *
 * ReviewForm.js
 *
 * Details the form used to create a new review
 * Displays all of the information used for a review and gives
 * an area for the user to input the information.
 * Also contains a 5 star scale selection for the rating of the review.
 */
import React from "react";
import Star from "./Star";

import { useState } from "react";

import styles from "./cssFile.module.css";
import { connect } from "react-redux";
import { addReview } from "../../actions/review";

const ReviewForm = (props) => {
  const id = props.csvFileId;

  var [reviewState, setReviewState] = useState({
    title: "",
    text: "",
    rating: 5,
    file: `${id}`,
    author: `${props.auth.user.id}`,
  });

  /* UTILITY: Updates the review when individual pieces of the review are changed.
   * INPUTS: Takes in the current state of the review.
   * OUTPUTS: Updated state of the review.
   */
  const onChange = (e) => {
    const newState = { ...reviewState, [e.target.name]: e.target.value };
    setReviewState(newState);
  };

  /* UTILITY: Generates and adds the review upon submission.
   * INPUTS: Current state of the review.
   * OUTPUTS: Created review.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    props.addReview(reviewState);
    setTimeout(() => {
      // refresh reviews
      props.handleSubmit();
    }, 200);
  };

  const RATINGS = ["Poor", "Fair", "Good", "Very good", "Excellent"];
  const [ratingIndex, setRatingIndex] = useState(4);
  const activeStar = {
    fill: "yellow",
  };

  /* UTILITY: Changes the index of the rating, increasing it by one.
   * INPUTS: Current rating index.
   * OUTPUTS: New review state with increased rating index.
   */
  const changeRatingIndex = (index) => {
    setRatingIndex(index);
    const newState = { ...reviewState, rating: parseInt(index) + 1 };
    setReviewState(newState);
  };

  return (
    <form onSubmit={onSubmit} data-testid="review_form-1">
      <div className="form-group">
        <div className="d-flex justify-content-between">
          <div className={styles.stars}>
            {RATINGS.map((rating, index) => (
              <Star
                index={index}
                key={rating}
                changeRatingIndex={changeRatingIndex}
                style={ratingIndex >= index ? activeStar : {}}
              />
            ))}
          </div>
          <div>
            <p>
              Rating:{" "}
              {RATINGS[ratingIndex]
                ? RATINGS[ratingIndex]
                : "No rating present yet."}
            </p>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          className="form-control"
          id="title"
          name="title"
          onChange={onChange}
        />
        <small id="titleHelp">Add a descriptive title.</small>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          onChange={onChange}
          name="text"
        />
        <small id="descriptionHelp">Add a description.</small>
      </div>
      <button type="submit" className="btn btn-outline-success">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addReview })(ReviewForm);
