import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getDataAccel, deleteDataAccel } from '../../actions/dataAccel'; 

export class DataAccel extends Component {
  static propTypes = {
    dataAccel:PropTypes.array.isRequired,
    getDataAccel:PropTypes.func.isRequired,
    deleteDataAccel:PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.getDataAccel();
  }

  render() {
    return (
      <Fragment>
        <h2>Data Accel</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Filepath</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            { this.props.dataAccel.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.file_path}</td>
                <td>
                  <button className="btn btn-danger btn-sm"
                    onClick={this.props.deleteDataAccel.bind(this,data.id)}
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
  dataAccel: state.dataAccel.dataAccel
});

export default connect(
  mapStateToProps,
    {getDataAccel,deleteDataAccel}
    )(DataAccel);