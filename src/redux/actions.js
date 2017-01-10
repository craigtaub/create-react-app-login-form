import { 
  RECEIVE_LOGIN,
  REQUEST_LOGIN,
  RECEIVED_ERROR,
  RECEIVED_LOGOUT
} from './constants';
import config from '../config';

const defaultFetchOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  }
}

export function receiveLogin(json) {
  return {
    type: RECEIVE_LOGIN,
    user: json.user
  }
}

export function receivedError() {
  return {
    type: RECEIVED_ERROR
  }
}

export function receivedLogout() {
  return {
    type: RECEIVED_LOGOUT
  }
}

export function fetchLogin(username, password) {
  return dispatch => {
    dispatch(requestLogin());
    const fetchOptions = Object.assign({}, defaultFetchOptions);
    fetchOptions.body = JSON.stringify({
      username: username,
      password: password
    });
    return fetch(config.USER_URL, fetchOptions)
      .then(response => response.json())
      .then(json => {
        if (json.user.success) {
          return dispatch(receiveLogin(json));
        } else {
          return dispatch(receivedError());
        }
      });
  }
}

export function logout() {
  return dispatch => dispatch(receivedLogout());
}
