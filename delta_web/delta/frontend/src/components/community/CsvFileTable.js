import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCsvFile,deleteCsvFile} from '../../actions/file'; 

export class CsvFileTable extends Component {
  static propTypes = {
    csvFile:PropTypes.array.isRequired,
    getCsvFile:PropTypes.func.isRequired,
    deleteCsvFile:PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.getCsvFile();
  }

  render() {
    return (
      <Fragment>
        <h2>Csv Files</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>File Id</th>
              <th>Filepath</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            { this.props.csvFile.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.file_path}</td>
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
  csvFile: state.csvFile.csvFile
});

export default connect(
  mapStateToProps,
    {getCsvFile,deleteCsvFile}
    )(CsvFileTable);