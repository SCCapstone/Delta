import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { updateCsvFile } from '../../actions/file';

export class CsvFileForm extends Component{
    static propTypes = {

    }

    state = {
        "file_name":this.props.original_file_name,
        "id":this.props.id
    }
    onChange = e => this.setState(
        {[e.target.name]:e.target.value}
    )
    onSubmit = e =>{
        e.preventDefault();
        const data = this.state;
        console.log(data)
        // call function
        this.props.updateCsvFile(data)
    }

    render(){

        return (
            <form onSubmit = {this.onSubmit}>
                <div>
                    File Name: 
                    <input
                    name ="file_name"
                    value = {this.state.file_name}
                    onChange={this.onChange}
                    placeholder={this.state.file_name}
                    >
                    </input>
                </div>
                <button className="btn btn-success">
                    Update Information
                </button>
            </form>
        )
    }
}

const mapStateToProps = state =>({
    csvFiles: state.csvFile.csvFile
});

export default connect(mapStateToProps,{updateCsvFile})(CsvFileForm);