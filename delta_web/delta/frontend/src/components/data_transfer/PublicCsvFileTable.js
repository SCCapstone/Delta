import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCsvFilesPublic,downloadCsvFile} from '../../actions/file'; 
import {Link} from 'react-router-dom'

// https://ui.dev/react-router-url-parameters

export class PublicCsvFileTable extends Component {
  static propTypes = {
    csvFiles:PropTypes.array.isRequired,
    deleteCsvFile:PropTypes.func.isRequired,
  };
  state = {
    // the file ids of the data you wish to download
    checkedFileIds: []
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

  render() {
    return (
      <Fragment>
        <h2>Publically Released Csv Files</h2>
        <form onSubmit={this.onSubmit}>
            <table className="table table-striped">
            <thead>
                <tr>
                <th>File Id</th>
                <th>File Name</th>
                <th>Upload Date</th>
                <th>View</th>
                <th>Download</th>
                </tr>
            </thead>
            <tbody>
                { this.props.csvFiles.map(data => (
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.file_name}</td>
                    <td>{data.timestamp}</td>
                    <td>
                        <Link to ="">
                        View TO DO
                        </Link>
                    </td>
                    <td>
                        <input type = "checkbox" 
                        onChange={()=>{this.onCheckChange(data.id)}}
                        />
                    </td>
                </tr>
                )) }
            </tbody>
            <button className="btn btn-sm btn-success">
                Download
            </button>
            </table>
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