import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getCsvFile,deleteCsvFile} from "../../actions/file";
import {useEffect} from 'react'
import PropTypes from 'prop-types'

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
        this.getCsvFile(id);
    },[])

    return (
        <div>
            <h1>
                File id: {id}
            </h1>
            <h1>
            </h1>
        </div>
    )
}

const mapStateToProps = state =>({
    csvFiles:state.csvFile.csvFile
})


export default connect(mapStateToProps,{getCsvFile,deleteCsvFile})(CsvFileDetail);