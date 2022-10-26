import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCsvFile,deleteCsvFile} from "../../actions/file";

export class CsvFileView extends Component {
    static propTypes = {
        csvFile:PropTypes.object.isRequired
    }
    render(){
        <Fragment>
            <h2>CSV File</h2>

        </Fragment>
    }
}