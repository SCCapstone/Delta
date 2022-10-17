import { GET_DATA_ACCEL, DELETE_DATA_ACCEL, ADD_DATA_ACCEL } from '../actions/types.js';

const initialState = {
    dataAccel: []
};

export default function(state = initialState,action){
    // check the actions
    // return some state
    switch(action.type){
        case GET_DATA_ACCEL:
            return {
                // include whatever is in the state
                ...state, 
                dataAccel: action.payload
            }

        case DELETE_DATA_ACCEL:
            return{
                ...state,
                // filter thru and only return the ones that are not
                // id of the deleted
                dataAccel: state.dataAccel.filter(data=>data.id !== action.payload)
            }
        case ADD_DATA_ACCEL:
            return{
                ...state,
                // any data thats already there and then add the new one
                dataAccel: [...state.dataAccel,action.payload]
            }
        default:
            return state;
    }
};