import {
  REQUEST_LOGIN,
  RECEIVED_LOGOUT
} from './constants';

export function fetchLogin(username, password) {
  return {
    type: REQUEST_LOGIN,
    payload: {username, password}
  }
}

export function receivedLogout() {
  return {
    type: RECEIVED_LOGOUT
  }
}
