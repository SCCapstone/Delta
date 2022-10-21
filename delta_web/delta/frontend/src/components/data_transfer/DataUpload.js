/*

Upload files via drag and drop.

*/

import React, {Component,useState,useEffect,useMemo} from 'react';
import {Link} from 'react-router-dom';
import {useDropzone} from "react-dropzone";

/*
Following: https://www.youtube.com/watch?v=frud5acrGLQ
*/
const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out"
  };
  
  const activeStyle = {
    borderColor: "#2196f3"
  };
  
  const acceptStyle = {
    borderColor: "#00e676"
  };
  
  const rejectStyle = {
    borderColor: "#ff1744"
  };
  
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  };
  
  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: "auto",
    height: 200,
    padding: 4,
    boxSizing: "border-box"
  };
  
  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
  };
  
  const img = {
    display: "block",
    width: "auto",
    height: "100%"
  };
  
  function StyledDropzone(props) {
    const [files, setFiles] = useState([]);
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      acceptedFiles,
      open
    } = useDropzone({
      accept: "text/csv",
      noClick: true,
      noKeyboard: true,
      onDrop: acceptedFiles => {
        setFiles(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    });
  
    const style = useMemo(
      () => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }),
      [isDragActive, isDragReject]
    );
  
    useEffect(
      () => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
      },
      [files]
    );
  
    return (
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" onClick={open}>
            Open File Dialog
          </button>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{filepath}</ul>
        </aside>
      </div>
    );
  }

export class DataUpload extends Component {
  onSubmit = e =>{
    e.preventDefault();
  }
  render(){
      return(
          <div>
              <h1>
                  Data Upload        
              </h1>

              <form onSubmit={this.onSubmit}>
                <StyledDropzone/>
                <button>Submit</button>
              </form>

              <span>
                  <Link to="/data/download">
                      Click to see data download
                  </Link>
              </span>
          </div>
      )
  }
}

export default DataUpload;