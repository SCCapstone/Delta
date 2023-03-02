import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {downloadCsvFile} from '../../actions/file'; 
import DataCard from './DataCard';

/*
*/

const PublicCsvFileTable = (props) =>{
  /*
  Takes in:
  props.csvs: an array of csv objects
  */

  // the csv files
  const [csvFiles, setCsvFiles] = useState(props.csvs);
  // text being searched
  const [searchText,setSearchText] = useState("");
  // table data
  const [tableCsvs,setTableCsvs] = useState(props.csvs);

  const [arrFilesToDownload,setArrFilesToDownload] = useState([]);
  const [numfilesSelected,setNumFilesSelected] = useState(0);

  // called when checkbox is changed
  const onCheckChange = (id) =>{
    let newFiles = arrFilesToDownload
    if(!arrFilesToDownload.includes(id)){
      // add
      newFiles.push(id)
      setArrFilesToDownload(newFiles);
      setNumFilesSelected(numfilesSelected+1) ;
    }else{
      // remove item
      newFiles = newFiles.filter(item=>item!==id);
      setArrFilesToDownload(newFiles);
      setNumFilesSelected(numfilesSelected-1) ;
    }
  }
  // when search thru table
  const onSearchChange = (e) =>{
    // to lowercase to make case insensitive
    var strInput = e.target.value.toLowerCase();
    setSearchText(strInput);
    // if not enough length, just reset the search
    if(strInput.length < props.textMinLength){
      setTableCsvs(props.csvs);
      return;
    }
    // else go thru files, find those that match
    var filteredCsvs = [];
    for(const csvFile of props.csvs){
      // convert to lowercase to ensure case insensitive
      if(csvFile.file_name.toLowerCase().includes(searchText)){
        filteredCsvs.push(csvFile);
      }
    }
    // set the table data
    setTableCsvs(filteredCsvs);
  }

  const onSubmit = e =>{
    e.preventDefault();
    arrFilesToDownload.forEach((id)=>{
      props.downloadCsvFile(id);
    })
  }

  if(csvFiles == null) return;

  return (
    <div>
      <form onSubmit = {onSubmit}>
         <div className="input-group mb-3">
           <div className="input-group-prepend">
             <span className= "input-group-text">File Name</span>
           </div>
            <input id = "search" type="text" className="form-control" placeholder= {`Enter at least ${props.textMinLength} characters`} onChange={onSearchChange}/>
           </div>
           <div>
            <p>Number of files selected for download: {numfilesSelected}</p>
           </div>
            <div style={{"height":"20rem","overflow":"auto"}}>
            <div className = "row" >
              {tableCsvs.map((item,index)=>(
                  <DataCard 
                    author={item.author_username}
                    date={item.formatted_date}
                    rating = {item.avg_rating}
                    key = {item.id}
                    title={item.file_name}
                    link={`/csvs/${item.id}`}
                    linkText={"See file"}
                    text={item.description}
                    id = {item.id}
                    parentOnCheckChange={onCheckChange}
                    tags = {item.tags}
                  />
                  )
              )}
            </div>
            </div>
          <br/>
          <button className='btn btn-sm btn-success mb-2'>
            Download
          </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  auth:state.auth
});

export default connect(
  mapStateToProps,
    {downloadCsvFile}
    )(PublicCsvFileTable);