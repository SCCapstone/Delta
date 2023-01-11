import React, {useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {downloadCsvFile} from '../../actions/file'; 
// note you can style react tables
import {Table,
  Header,HeaderRow,HeaderCell,
  Body,Row,Cell
} from '@table-library/react-table-library/table'
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  var fileData = {nodes:tableCsvs}

  return (
    <div>
      <form onSubmit = {onSubmit}>
         <div className="input-group mb-3">
           <div className="input-group-prepend">
             <span className= "input-group-text">File Name</span>
           </div>
           <input id = "search" type="text" className="form-control" placeholder="Enter at least three characters" onChange={onSearchChange}/>
           </div>
           <Table data={fileData}>{(tableList) =>(
            <>
            <Header>
              <HeaderRow>
                <HeaderCell>File Id</HeaderCell>
                <HeaderCell>File Name</HeaderCell>
                <HeaderCell>Upload Date</HeaderCell>
                <HeaderCell>View</HeaderCell>
                <HeaderCell>Download</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item)=>(
                <Row key={item.id} item={item}>
                  <Cell>{item.id}</Cell>
                  <Cell>{item.file_name}</Cell>
                  <Cell>{item.formatted_date}</Cell>
                  <Cell>
                    <Link to ={`/csvs/${item.id}`}>
                      View
                    </Link>
                  </Cell>
                  <Cell>
                    <input type="checkbox"
                    onChange={()=>{onCheckChange(item.id)}}
                    />
                  </Cell>
                </Row>
              ))}

            </Body>
            </>
          )}
          </Table>
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