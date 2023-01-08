import React from 'react'

import StarSvg from "./StarSvg"

const Review = (props) => {

  var arrStars = []
  for(let i=0;i< props.reviewData.rating;i++){
    arrStars.push(<StarSvg/>);
  }

  return (
    <div className ="container border">
        <div className = "d-flex justify-content-between">
          <h5>{props.reviewData.title}</h5>
          <div className="d-flex flex-row">
            {arrStars.map((starSvg)=>(
              starSvg
            ))}
          </div>
        </div>
        <h4>{props.reviewData.title}</h4>
        <div className="d-flex justify-content-between">
          <p>{props.reviewData.author_username}</p>
          <p>{props.reviewData.pub_date}</p>
        </div>
        <hr/>
        <div>
          <p>
            {props.reviewData.text}
          </p>
        </div>
    </div>
  )
}

export default Review