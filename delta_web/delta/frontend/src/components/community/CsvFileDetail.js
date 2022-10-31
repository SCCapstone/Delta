import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getCsvFile,deleteCsvFile} from "../../actions/file";
import {useEffect} from 'react'
import PropTypes from 'prop-types'
import CsvFileForm from './CsvFileForm';

// https://ui.dev/react-router-url-parameters

import {
    useParams
} from "react-router-dom"

const CsvFileDetail = (props) => {
    const propTypes = {
        csvFiles: PropTypes.array.isRequired
    }
    const {id} = useParams();

    const [csvFiles] = useState(0);

    useEffect(()=>{
        props.getCsvFile(id);
    },[])

    return (
        <div>
            {props.csvFiles.map(data=>(
                <div>
                    <p>id: {data.id}</p>
                    <p>file name: {data.file_name}</p>
                    <p>timestamp: {data.timestamp}</p>
                    <CsvFileForm id={id} original_file_name={data.file_name}/>                   
                </div>
            ))}
            <h1>
            </h1>
        </div>
    )
}

const mapStateToProps = state =>({
    csvFiles:state.csvFile.csvFile
})


export default connect(mapStateToProps,{getCsvFile,deleteCsvFile})(CsvFileDetail);