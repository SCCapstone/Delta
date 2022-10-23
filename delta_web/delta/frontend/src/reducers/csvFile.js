import { GET_CSV_FILE, DELETE_CSV_FILE, ADD_CSV_FILE } from '../actions/types.js';

const initialState = {
    csvFile: []
};

export default function(state = initialState,action){
    // check the actions
    // return some state
    switch(action.type){
        case GET_CSV_FILE:
            return {
                // include whatever is in the state
                ...state, 
                csvFile: action.payload
            }

        case DELETE_CSV_FILE:
            return{
                ...state,
                // filter thru and only return the ones that are not
                // id of the deleted
                csvFile: state.csvFile.filter(data=>data.id !== action.payload)
            }
        case ADD_CSV_FILE:
            return{
                ...state,
                // any data thats already there and then add the new one
                csvFile: [...state.csvFile,action.payload]
            }
        default:
            return state;
    }
};