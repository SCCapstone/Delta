/*
###############################################################################

Delta project

Authors:
Lexington Whalen (@lxaw)
Carter Marlowe (@Cmarlowe132)
Vince Kolb-LugoVince (@vancevince) 
Blake Seekings (@j-blake-s)
Naveen Chithan (@nchithan)

File name:  DataCard.js

Brief description: 
    When viewing public data, entries are shown via a data card which
displays all of the relevant information in an appealing manner. This file 
defines the layout of that data card and how it can be interacted with.

###############################################################################
*/



import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import tag_styles from "./tags.module.css";

const DataCard = (props) => {

    const [toDownload,setToDownload] = useState(false);
    const [style,setStyle] = useState({width:'25rem'})

    // UTILITY: Changes the ToDownload attribute of the DataCard when clicked.
    // UTILITY: Initial state is false, every click changes it to true and vice-versa.
    const checkDownload = (e) =>{
        e.preventDefault()
        if(toDownload){
            // uncheck
            setToDownload(false);
            setStyle({...style,backgroundColor:""})
            props.parentOnCheckChange(props.id)
        }else{
            setToDownload(true)
            setStyle({...style,backgroundColor:"#cce6ff"})
            props.parentOnCheckChange(props.id)
        }
    }

  return (
    <div className="card m-2 pt-2 pb-2" style={style} onMouseDown={checkDownload}
        data-testid="data_card-1"
    >
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <p>
                    Author: <Link to={`/profile/${props.author}`}>{props.author}</Link>
                </p>
                <p>
                    Published: {props.date}
                </p>
            </div>
            <h6>Rating: {props.rating}</h6>
            <small>Download count: {props.downloadCount}</small>
            <h6 className="card-title">
                File Name: {props.title}
            </h6>
            <p className="card-text">
                {props.text}
            </p>
            <div>
                <h6>Tags:</h6>
                {props.tags.map((tag,index)=>(
                    <div className={tag_styles.tag_item} key = {index}>
                        <span className={tag_styles.text}>
                            {tag.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
        <div className="d-flex justify-content-between">
            <Link to={props.link} className="btn btn-sm btn-primary">
                {props.linkText}
            </Link>
        </div>
    </div>
  )
}

export default DataCard;