import { CREATE_MESSAGE, GET_ERRORS } from "./types";

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
<<<<<<< HEAD
        payload:msg
    };
};

// RETURN ERRORS
export const returnErrors = (msg,status) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status}
=======
        payload: msg
    }
}

export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
>>>>>>> vince-web-login-reg-pages
    }
}