import React, {useState} from 'react'
import {Table,
  Header,HeaderRow,HeaderCell,
  Body,Row,Cell
} from '@table-library/react-table-library/table'
import { Link } from 'react-router-dom';


const SearchableCsvFileTable = (props) => {
    const searchTextMinLength = props.textMinLength ? props.textMinLength : 0;
    const csvFiles = props.csvFiles ? props.csvFiles : [];

    // text being searched
    var [searchText,setSearchText] = useState("");
    // csv files that show
    var [tableCsvs,setTableCsvs] = useState(csvFiles);

    const onSearchChange = (e) =>{
        var strInput = e.target.value;
        setSearchText(strInput)
        if(strInput.length < searchTextMinLength){
            setTableCsvs(csvFiles);
            return;
        }
        // else go thru files, find those that match
        var filteredCsvs = [];
        for(const csvFile of csvFiles){
            if(csvFile.file_name.includes(searchText)){
                filteredCsvs.push(csvFile);
            }
        }
        setTableCsvs(filteredCsvs);
    }

    var fileData = {nodes:tableCsvs}

  return (
    <div>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className= "input-group-text">File Name</span>
        </div>
        <input id = "search" type="text" className="form-control" placeholder="Enter at least three characters" onChange={onSearchChange}/>
        </div>
        <Table data={fileData}>{(tableList) =>(
        <>
        <Header>
            <HeaderRow>
            <HeaderCell>File Id</HeaderCell>
            <HeaderCell>File Name</HeaderCell>
            <HeaderCell>Upload Date</HeaderCell>
            <HeaderCell>View</HeaderCell>
            </HeaderRow>
        </Header>
        <Body>
            {tableList.map((item)=>(
            <Row key={item.id} item={item}>
                <Cell>{item.id}</Cell>
                <Cell>{item.file_name}</Cell>
                <Cell>{item.formatted_date}</Cell>
                <Cell>
                    <Link to ={`/csvs/${item.id}`}>
                        View
                    </Link>
                </Cell>
            </Row>
            ))}

        </Body>
        </>
        )}
        </Table>
    </div>
  )
}

export default SearchableCsvFileTable