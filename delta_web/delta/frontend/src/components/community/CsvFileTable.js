import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCsvFiles,deleteCsvFile} from '../../actions/file'; 
import {Link} from 'react-router-dom'

// https://ui.dev/react-router-url-parameters

export class CsvFileTable extends Component {
  static propTypes = {
    csvFiles:PropTypes.array.isRequired,
    deleteCsvFile:PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.getCsvFiles();
  }

  render() {
    return (
      <Fragment>
        <h2>Your Csv Files</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>File Id</th>
              <th>File Name</th>
              <th>Upload Date</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.props.csvFiles.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.file_name}</td>
                <td>{data.timestamp}</td>
                <td>
                    <Link to ={`csvs/${data.id}`}>
                      View
                    </Link>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm"
                    onClick={this.props.deleteCsvFile.bind(this,data.id)}
                  >
                    Delete
                  </button>
                  </td>
              </tr>
            )) }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  csvFiles: state.csvFile.csvFile
});

export default connect(
  mapStateToProps,
    {getCsvFiles,deleteCsvFile}
    )(CsvFileTable);