import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {downloadCsvFile} from '../../actions/file'; 
// note you can style react tables
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataCard from './DataCard';

/*
TO DO: 
There should only be one SearchableCsvFileTable function, that can take in different data.
*/


const PublicCsvFileTable = (props) =>{

  // the csv files
  var [csvFiles, setCsvFiles] = useState(null);
  // text being searched
  var [searchText,setSearchText] = useState("");
  // table data
  var [tableCsvs,setTableCsvs] = useState(null);

  // the files that user wants to download
  var arrFilesToDownload = [];

  // on load call this
  useEffect(()=>{
    axios.get('/api/public_csvs/',{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
    .then(res=>{
      setCsvFiles(res.data);
      setTableCsvs(res.data);
    })
  },[])

  // when submit form
  const onSubmit = e =>{
    e.preventDefault();
    console.log(arrFilesToDownload);
    arrFilesToDownload.forEach((id)=>{
      props.downloadCsvFile(id);
    })
  }

  // called when checkbox is changed
  const onCheckChange = (id) =>{
    if(!arrFilesToDownload.includes(id)){
      // add
      arrFilesToDownload.push(id);
    }else{
      // remove item
      arrFilesToDownload = arrFilesToDownload.filter(item => item !== id);
    }
  }
  // when search thru table
  const onSearchChange = (e) =>{
    var strInput = e.target.value;
    setSearchText(strInput);
    // if not enough length, just reset the search
    if(strInput.length < 3){
      setTableCsvs(csvFiles);
      return;
    }
    // else go thru files, find those that match
    var filteredCsvs = [];
    for(const csvFile of csvFiles){
      if(csvFile.file_name.includes(searchText)){
        filteredCsvs.push(csvFile);
      }
    }
    // set the table data
    setTableCsvs(filteredCsvs);
  }

  if(csvFiles == null) return;

  // split tables into chunks of three
  var subTables = [],size = 3
  while(tableCsvs.length > 0){
    subTables.push(tableCsvs.splice(0,size));
  }
  console.log(subTables)

  return (
    <div>
      <form onSubmit = {onSubmit}>
         <div className="input-group mb-3">
           <div className="input-group-prepend">
             <span className= "input-group-text">File Name</span>
           </div>
           <input id = "search" type="text" className="form-control" placeholder="Enter at least three characters" onChange={onSearchChange}/>
           </div>
            <div className = "container">
              {subTables.map((subTable,index)=>(
                  <div className="row mb-3" key={index}>
                    {subTable.map((item,index)=>(
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
                // <div className="container m-3 p-3">
                //   <h5>{item.file_name}</h5> 
                //   <hr/>
                //     <Link to ={`/csvs/${item.id}`}>
                //       View
                //     </Link>
                //     <input type="checkbox"
                //     onChange={()=>{onCheckChange(item.id)}}
                //     />
                //   <div>
                //     <h6>Tags</h6>
                //   </div>
                // </div>
              ))}
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