/*
###############################################################################

Delta project

Authors:
Lexington Whalen (@lxaw)
Carter Marlowe (@Cmarlowe132)
Vince Kolb-LugoVince (@vancevince) 
Blake Seekings (@j-blake-s)
Naveen Chithan (@nchithan)

File name:  PublicCsvFileTable.js

Brief description: 
    When users visit the data download page, they are able to search through
all public files via name and tags and see that data. This file determines
how that searching is done and allows users to download files.

###############################################################################
*/


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
  // tags being searched
  // note that this is an array
  const [searchTags,setSearchTags] = useState([]);
  // table data
  const [tableCsvs,setTableCsvs] = useState(props.csvs);

  const [arrFilesToDownload,setArrFilesToDownload] = useState([]);
  const [numfilesSelected,setNumFilesSelected] = useState(0);

  const textMinLength = (props.textMinLength != undefined) ? props.textMinLength : 3

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
  // via name AND tags
  const onSearchChange = () =>{
    // get text for filename search
    const strFileNameSearch = $('#inputSearchFileName').val().toLowerCase()
    // get array for tag search
    const arrStrTagSearch = $("#inputSearchTags").val().split(" ").filter((e)=>{return e != ""}).map(e=>e.toLowerCase());

    // if not enough length, just reset the search
    // go thru tags


    var filteredCsvs = props.csvs;
    // search 1: tags
    // only perform operation of search on tags if there are tags
    if(arrStrTagSearch.length > 0){
      filteredCsvs.forEach((csvFile)=>{
        const arrStrFileTags= csvFile.tags.map((strObj)=>strObj.text);
        var isSubset = false;
        for(let strSearchTag of arrStrTagSearch){
          for(let strFileTag of arrStrFileTags){
            if(strFileTag.toLowerCase().includes(strSearchTag.toLowerCase())){
              isSubset = true;
            }
          }
        }
        arrStrTagSearch.every((searchTag)=> 
        {

          arrStrFileTags.includes(searchTag)
        }
        );
        if(!isSubset){
          // can safely remove file
          filteredCsvs = filteredCsvs.filter((e)=>{return e != csvFile})
          return;      
        }
      })
    }
    // search 2: names
    if(strFileNameSearch.length >= textMinLength){
      filteredCsvs.forEach((csvFile)=>{
        if(!csvFile.file_name.toLowerCase().includes(strFileNameSearch)){
          filteredCsvs = filteredCsvs.filter((e)=>{return e != csvFile});
          return
        }
      })
    }
    // set the table data
    setSearchText(strFileNameSearch);
    setSearchTags(arrStrTagSearch);
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
    <div data-testid="public_csv_file_table-1">
      <form onSubmit = {onSubmit}>
          <div className="input-group mb-3">
           <div className="input-group-prepend">
             <span className= "input-group-text">File Name</span>
           </div>
            <input id = "inputSearchFileName" type="text" className="form-control" 
            placeholder= {`Enter at least ${textMinLength} characters`} 
            onChange={onSearchChange}/>
          </div>
          <div className="input-group mb-3">
           <div className="input-group-prepend">
             <span className= "input-group-text">Tags</span>
           </div>
            <input id = "inputSearchTags" type="text" className="form-control" 
            placeholder= {"Enter tags to search for, separated by spaces. For instance, you could enter \"cat dog\" to see files with tags of \"cat\" and \"dog\""} 
            onChange={onSearchChange}/>
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
                    downloadCount = {item.download_count}
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