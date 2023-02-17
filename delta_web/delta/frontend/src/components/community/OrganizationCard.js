import React from 'react'
import { Link } from 'react-router-dom'

const OrganizationCard = (props) => {
  console.log(props)
  return (
    <div className="border card" style={{width:"18rem"}}>
        <div className="card-body">
            <h5 className="card-title">
                {props.orgObj.name}
            </h5>
            <p className="card-text">
                {props.orgObj.description}
            </p>
            <Link className="link" to={`/community/organizations/${props.orgObj.id}`}>
                View
            </Link>
        </div> 
    </div>
  )
}

export default OrganizationCard