/*

Upload files via drag and drop.
https://upmostly.com/tutorials/react-dropzone-file-uploads-react
*/

import React from 'react';
import { connect } from 'react-redux';
import DataUploadForm from './DataUploadForm';

const DataUpload = (props) => {
  if(props.auth.user.username == undefined) return;
  return(
    <div className = "container">
        <h1>
            Data Upload        
        </h1>
        <DataUploadForm availableOrgs= {props.auth.user.followed_organizations}/>
        <a role="button" href="/#/data/download" className="btn btn-danger">
            Cancel
        </a> 
    </div>
  )
}

const mapStateToProps = state => ({
  auth:state.auth
});


export default connect(mapStateToProps,null)(DataUpload);