import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const OrganizationCard = (props) => {
    // hover changes color
    const [hover,setHover] = useState(false);

    const style={
        background: hover ? '#cce6ff':'',
        width:"18rem"
    }
  return (
    <div className="border card m-2" style={style} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Link to={`/community/organizations/${props.orgObj.id}`} style={{textDecoration:'none'}}>
            <img src={props.imgSrc} className="card-img-top" alt={`Image for ${props.orgObj.name}`} />
            <div className="card-body">
                <h5 className="card-title">
                    {props.orgObj.name}
                </h5>
                <p className="card-text">
                    {props.orgObj.description}
                </p>
            </div> 
        </Link>
    </div>
  )
}

export default OrganizationCard