import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getCsvFile,deleteCsvFile} from "../../actions/file";

// https://ui.dev/react-router-url-parameters

import {
    useParams
} from "react-router-dom"

const CsvFileDetail = (props) =>{
    const [value,setValue]= useState(1);
    console.log()

    const {id} = useParams();
    console.log("over here " + props.getCsvFile(id))

    return (
        <div>
            <h1>
                {id}
            </h1>
            <h1>
            </h1>
        </div>
    )
}

export default connect(null,{getCsvFile,deleteCsvFile})(CsvFileDetail);