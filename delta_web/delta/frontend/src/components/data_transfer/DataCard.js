import React, { useState } from 'react'
import { Link } from 'react-router-dom';

/*
A card for the public csv table

Expects 

title
desc
imgSrc (optional)
imgAlt (optional)
link (optional)
linkText (optional)
img path
*/

const DataCard = (props) => {

    const [toDownload,setToDownload] = useState(false);
    const [style,setStyle] = useState({width: '24rem'})
    const [buttonText,setButtonText] = useState("Add to downloads?")
    const [buttonStyle,setButtonStyle] = useState({"border-color":"green"})

    const checkDownload = (e) =>{
        e.preventDefault()
        if(toDownload){
            // uncheck
            setToDownload(false);
            setStyle({...style,"border-color":""})
            setButtonText("Add to downloads?")
            setButtonStyle({"border-color":"green"})
            props.parentOnCheckChange(props.id)
        }else{
            setToDownload(true)
            setStyle({...style,"border-color":"green"})
            setButtonStyle({"border-color":"red"})
            setButtonText("Remove from downloads?")
            props.parentOnCheckChange(props.id)
        }
    }

  return (
    <div className="card m-1 p-1" style={style}>
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <p>
                    Author: <Link to={`/profile/${props.author}`}></Link>{props.author}
                </p>
                <p>
                    Published: {props.date}
                </p>
            </div>
            <h6>Rating: {props.rating}</h6>
            <h6 className="card-title">
                File Name {props.title}
            </h6>
            <p className="card-text">
                {props.text}
            </p>
            <div>
                <h6>Tags:</h6>
                {props.tags.map((tag,index)=>(
                    <div key = {index}>
                        {tag.text}
                    </div>
                ))}
            </div>
        </div>
        <div className="d-flex justify-content-between">
            <Link to={props.link} className="btn btn-sm btn-primary">
                {props.linkText}
            </Link>
            <button className="btn btn-sm" style={buttonStyle} onClick={checkDownload}>
                {buttonText}
            </button>
        </div>
    </div>
  )
}

export default DataCard;