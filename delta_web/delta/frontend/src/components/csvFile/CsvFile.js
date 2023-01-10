import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteCsvFile } from '../../actions/file'

const CsvFile = (props) => {
    const clickDelete = () =>{
        var dialog = confirm("Would you like to delete this file? There is no going back.");
        if(dialog){
        props.deleteCsvFile(id);
        }
    }

  return (
    <div className="container border border-rounded m-3 p-3">
        <div className="d-flex justify-content-between">
            <h5>{props.csvFileData.formatted_date}</h5>
        </div>
        <div>
            <div>
                <h4>File name: {props.csvFileData.file_name}</h4>
            </div>
            <hr/>
            <div>
                {props.csvFileData.description}
            </div>
        </div>
        <br/>
        {props.auth.user.id == props.csvFileData.author &&(
            <div className="d-flex justify-content-between">
                <Link to= {`/csvs/${props.csvFileData.id}/edit`}>
                <button className="btn btn-primary">
                    Edit
                </button>
                </Link>
                <button onClick={clickDelete} className = "btn btn-danger">
                Delete
                </button>
            </div>
        )}
    </div>
  )
}

const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps,{deleteCsvFile})(CsvFile)