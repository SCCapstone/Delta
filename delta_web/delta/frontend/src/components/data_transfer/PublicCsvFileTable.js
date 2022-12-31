import React, { Component, Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCsvFilesPublic,downloadCsvFile} from '../../actions/file'; 
import {Link} from 'react-router-dom'
// note you can style react tables
import {useTheme} from '@table-library/react-table-library/theme'
import {Table,
  Header,HeaderRow,HeaderCell,
  Body,Row,Cell
} from '@table-library/react-table-library/table'
import axios from 'axios';

/*
TO DO: 
There should only be one SearchableCsvFileTable function, that can take in different data.
*/

const PublicCsvFileTable = (props) =>{
  var [csvFiles, setCsvFiles] = useState(null);

  useEffect(()=>{
    axios.get('/api/public_csvs/',{headers:{'Content-Type':'application/json','Authorization':`Token ${props.auth.token}`}})
    .then(res=>{
      setCsvFiles(res.data);
    })
  })

  if(csvFiles == null) return;

  var fileData = {nodes:csvFiles}

  return (
    <div>
      <form onSubmit = {onSubmit}></form>
    </div>
  )
}

// export class PublicCsvFileTable extends Component {
//   static propTypes = {
//     csvFiles:PropTypes.array.isRequired,
//     getCsvFilesPublic:PropTypes.func.isRequired,
//     downloadCsvFile:PropTypes.func.isRequired
//   };
//   state = {
//     // the file ids of the data you wish to download
//     checkedFileIds: [],
//     searchText:"",
//     data : []
//   }

//   componentDidMount(){
//     this.props.getCsvFilesPublic();
//   }
//   onSubmit = e => {
//     e.preventDefault();
//     // console.log(this.state.checkedFileIds)
//     this.state.checkedFileIds.forEach(id=>{
//         this.props.downloadCsvFile(id)
//     })
//   }
//   onCheckChange = (id) =>{
//     if(!this.state.checkedFileIds.includes(id)){
//         // add
//         this.state.checkedFileIds.push(id)
//     }else{
//         // remove item
//         this.state.checkedFileIds = this.state.checkedFileIds.filter(item => item !== id)
//     }
//   }
//   onSearchChange = e => {
//     var strInput = e.target.value;
//     this.setState({searchText:strInput})
//     if(strInput.length < 3){
//       this.setState({data:this.props.csvFiles});
//       return;
//     }
//     var newData = []
//     for(const file of this.props.csvFiles){
//       if(file.file_name.includes(this.state.searchText)){
//         newData.push(file);
//       }
//     }
//     this.setState({data:{nodes:newData}});
//   }

//   render() {
//     var fileData = {nodes:this.props.csvFiles}
//     if(this.state.data.nodes != null){
//       fileData = this.state.data;
//     }

//     return (
//       <Fragment>
//         <form onSubmit={this.onSubmit}>
//           <div className="input-group mb-3">
//             <div className="input-group-prepend">
//               <span className= "input-group-text">File Name</span>
//             </div>
//             <input id = "search" type="text" className="form-control" placeholder="Enter at least three characters" onChange={this.onSearchChange}/>
//           </div>
//           <Table data={fileData}>{(tableList) =>(
//             <>
//             <Header>
//               <HeaderRow>
//                 <HeaderCell>File Id</HeaderCell>
//                 <HeaderCell>File Name</HeaderCell>
//                 <HeaderCell>Upload Date</HeaderCell>
//                 <HeaderCell>Download</HeaderCell>
//               </HeaderRow>
//             </Header>
//             <Body>
//               {tableList.map((item)=>(
//                 <Row key={item.id} item={item}>
//                   <Cell>{item.id}</Cell>
//                   <Cell>{item.file_name}</Cell>
//                   <Cell>{item.timestamp}</Cell>
//                   <Cell>
//                     <input type="checkbox"
//                     onChange={()=>{this.onCheckChange(item.id)}}
//                     />
//                   </Cell>
//                 </Row>
//               ))}

//             </Body>
//             </>
//           )}
//           </Table>
//           <button className='btn btn-sm btn-success mb-2'>
//             Download
//           </button>
//         </form>
//       </Fragment>
//     )
//   }
// }

const mapStateToProps = state => ({
  auth:state.auth
});

export default connect(
  mapStateToProps,
    {getCsvFilesPublic,downloadCsvFile}
    )(PublicCsvFileTable);