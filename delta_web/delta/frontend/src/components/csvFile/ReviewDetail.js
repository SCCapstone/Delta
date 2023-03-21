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
 * ReviewDetail.js
 *
 * The detailed showing of the data in a review.
 * Grabs all the data of a review and displays it on a form
 * Information can also be changed and submitted
 */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateReview } from "../../actions/review";

import styles from "./cssFile.module.css";
import Star from "./Star";

const ReviewDetail = (props) => {
  if (props.auth.user.id == undefined) return;

  const [reviewData, setReviewData] = useState(null);
  const [ratingIndex, setRatingIndex] = useState(null);

  const { id } = useParams();

  /* UTILITY: Retrieves the data of the current review.
   * INPUTS: Makes use of the review id.
   * OUTPUTS: sets the data of the review and the index of the review.
   */
  const getData = () => {
    axios
      .get(`/api/review/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${props.auth.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setReviewData(res.data);
        setRatingIndex(res.data.rating - 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  /* UTILITY: Runs when part of the review is changed.
   * INPUTS: Newly updated information from the review.
   * OUTPUTS: Updated review.
   */
  const onChange = (e) => {
    const newState = { ...reviewData, [e.target.name]: e.target.value };
    setReviewData(newState);
  };

  /* UTILITY: Runs when the form is submitted and updates the data of the review.
   * INPUTS: Takes in the information from the review.
   * OUTPUTS: Review with the updated information.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    props.updateReview({
      id: reviewData.id,
      title: reviewData.title,
      text: reviewData.text,
      rating: reviewData.rating,
    });
  };

  if (reviewData == null) return <div data-testid="review_detail-1"></div>;

  const RATINGS = ["Poor", "Fair", "Good", "Very good", "Excellent"];
  const activeStar = {
    fill: "yellow",
  };

  /* UTILITY: Increases the rating's index by 1.
   * INPUTS: Takes in the index of the rating.
   * OUTPUTS: Updated review state with increased rating index.
   */
  const changeRatingIndex = (index) => {
    console.log(index);
    setRatingIndex(index);
    const newState = { ...reviewData, rating: parseInt(index) + 1 };
    setReviewData(newState);
  };

  return (
    <div className="container" dadta-testid="review_detail-1">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div className="d-flex justify-content-between">
            <div className={styles.stars}>
              {RATINGS.map((rating, index) => (
                <Star
                  key={index}
                  index={index}
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
            placeholder={reviewData.title}
          />
          <small id="titleHelp">Add a descriptive title.</small>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={onChange}
            name="text"
            placeholder={reviewData.text}
          />
          <small id="descriptionHelp">Add a description.</small>
        </div>
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </form>
      <br />
      <div>
        <Link to={`/csvs/${reviewData.file}`} className="btn btn-danger">
          Back
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateReview })(ReviewDetail);
