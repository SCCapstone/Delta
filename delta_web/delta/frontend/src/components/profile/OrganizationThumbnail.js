import React,{useState} from 'react'

const OrganizationThumbnail = (props) => {

    const [style,setStyle] = useState({});
    const [isDeleted,setIsDelete] = useState(false);

    const onOrgRemove = (e) =>{
        e.preventDefault()
        setStyle({background:'grey'})
        setIsDelete(true);

        props.parentOnRemoveOrg(props.org);
    }

    const onOrgPutback = (e) =>{
        e.preventDefault()
        setStyle({background:''})
        setIsDelete(false);

        props.parentOnPutBackOrg(props.org);
    }

    /*
    props.org is an organization object
    */
  return (
    <div style={style} data-testid="organization_thumbnail-1">
        <div className="border p-3 d-flex justify-content-between">
            <div>
                {props.org.name}
            </div>
            <div>
                {isDeleted ? 
                <button className="btn btn-sm btn-outline-success" onClick={onOrgPutback}>
                    Put back
                </button>
                :
                <button className="btn btn-sm btn-outline-danger" onClick={onOrgRemove}>
                    Remove
                </button>
                }
            </div>
        </div>
    </div>
  )
}

export default OrganizationThumbnail