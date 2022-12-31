/*

Upload files via drag and drop.
https://upmostly.com/tutorials/react-dropzone-file-uploads-react
*/

import React from 'react';
import DataUploadForm from './DataUploadForm';

const DataUpload = () => {
  return(
    <div className = "container">
        <h1>
            Data Upload        
        </h1>
        <DataUploadForm/>
        <a role="button" href="/#/data/download" className="btn btn-danger">
            Cancel
        </a> 
    </div>
  )
}

export default DataUpload;