import axios from "axios"
import { config } from "react-transition-group"
import { returnErrors } from "./messages"
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "./types"

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING })

  // Get toke from state, looking at the auth reducer
  const token = getState().auth.token

  // Headers -> just like in Postman when sending requests, sending an object with key, value
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // If token, add to headers configuration
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  // Load user or return error
  axios.get('/api/auth/user', config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    }).catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}