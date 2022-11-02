import React, { Component, Fragment } from 'react';
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

// to do: convert to functional component

// https://www.robinwieruch.de/react-table-component/
// https://www.robinwieruch.de/react-table-search/

export class PublicCsvFileTable extends Component {
  static propTypes = {
    csvFiles:PropTypes.array.isRequired,
    getCsvFilesPublic:PropTypes.func.isRequired,
    downloadCsvFile:PropTypes.func.isRequired
  };
  state = {
    // the file ids of the data you wish to download
    checkedFileIds: [],
    searchText:"",
    data : []
  }

  componentDidMount(){
    this.props.getCsvFilesPublic();
  }
  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.checkedFileIds)
    this.state.checkedFileIds.forEach(id=>{
        this.props.downloadCsvFile(id)
    })
  }
  onCheckChange = (id) =>{
    if(!this.state.checkedFileIds.includes(id)){
        // add
        this.state.checkedFileIds.push(id)
    }else{
        // remove item
        this.state.checkedFileIds = this.state.checkedFileIds.filter(item => item !== id)
    }
  }
  onSearchChange = e => {
    this.setState({searchText:e.target.value})
  }

  render() {
    this.state.data = {nodes:this.props.csvFiles};

    if(!this.state.data['nodes'].length){
      return null;
    };
    this.state.data = {nodes: this.state.data['nodes'].filter((item)=>item.file_name.toLowerCase().includes(this.state.searchText.toLowerCase()))}

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="search">
            Search by Name:
            <input id = "search" type="text" onChange={this.onSearchChange}/>
          </label>
          <Table data={this.state.data}>{(tableList) =>(
            <>
            <Header>
              <HeaderRow>
                <HeaderCell>File Id</HeaderCell>
                <HeaderCell>File Name</HeaderCell>
                <HeaderCell>Upload Date</HeaderCell>
                <HeaderCell>View TO DO</HeaderCell>
                <HeaderCell>Download</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item)=>(
                <Row key={item.id} item={item}>
                  <Cell>{item.id}</Cell>
                  <Cell>{item.file_name}</Cell>
                  <Cell>{item.timestamp}</Cell>
                  <Cell>Click to View (TODO)</Cell>
                  <Cell>
                    <input type="checkbox"
                    onChange={()=>{this.onCheckChange(item.id)}}
                    />
                  </Cell>
                </Row>
              ))}

            </Body>
            </>
          )}
          </Table>
          <button className='btn btn-sm btn-success'>
            Submit
          </button>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  csvFiles: state.csvFile.csvFile
});

export default connect(
  mapStateToProps,
    {getCsvFilesPublic,downloadCsvFile}
    )(PublicCsvFileTable);