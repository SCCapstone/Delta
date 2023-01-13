import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getCsvFile,deleteCsvFile} from "../../actions/file";
import {useEffect} from 'react'

import {Link,useParams} from "react-router-dom"
import axios from 'axios';

// components
import ReviewForm from './ReviewForm';
import Review from './Review';
import CsvFile from './CsvFile';

const CsvFileDetail = (props) => {
    const {id} = useParams();

    // the csv file itself
    const [csvFile,setCsvFile] = useState(null);
    // the reviews themself
    const [arrReviews,setArrReviews] = useState([]);

    const retrieveData = () =>{
      // get the csv data
      axios.get(`/api/csv/${id}/`,{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
      .then(res=>{
        setCsvFile(res.data);
        setArrReviews(res.data.reviews);
      })
    }

    useEffect(()=>{
      retrieveData();
    },[])

    // should return some spinner
    if(csvFile == null) return;

    return (
        <div className="container">
          <CsvFile csvFileData={csvFile} />
          <div className="">
            <h3>Add a review?</h3>
            <ReviewForm csvFileId = {id} handleSubmit={retrieveData}/>
          </div>
          <br/>
          <div className="row">
            <div className="col-4">
              <h1>Reviews</h1>
              <div>
                <h5>{csvFile.avg_rating} out of 5</h5>
                <h5>{csvFile.review_count} reviews</h5>
              </div>
            </div>
            <div className="col-8">
              <div className = "">
                {arrReviews.map((data)=>(
                  <Review reviewData={data} refreshReviews = {retrieveData}/>
                )
                )}
              </div>
            </div>
          </div> 
      </div>
    )
}

const mapStateToProps = state =>({
  auth:state.auth
})


export default connect(mapStateToProps,{getCsvFile,deleteCsvFile})(CsvFileDetail);