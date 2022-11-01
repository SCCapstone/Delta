import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addDataAccel } from '../../actions/dataAccel';

export class Form extends Component {
  state = {
    file_path: '',
  };

  static propTypes = {
    addDataAccel:PropTypes.func.isRequired
  };

  onChange = e => this.setState({[e.target.name]:
    e.target.value});

  onSubmit = e =>{
    e.preventDefault();
    const { file_path } = this.state;
    const data = { file_path };
    this.props.addDataAccel(data);
    this.setState({
      file_path: "",
    });
  };

  render() {
    const {file_path} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Acceleration Data</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Filepath</label>
            <input
            className="form-control"
            type="text"
            name="file_path"
            onChange={this.onChange}
            value={file_path}
            />
          </div>
          <br/>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null,{ addDataAccel })(Form);