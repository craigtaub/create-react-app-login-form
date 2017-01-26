import config from '../config';

const defaultFetchOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

function signUserIn(payload) {
  const fetchOptions = Object.assign({}, defaultFetchOptions);
  fetchOptions.body = JSON.stringify({
    username: payload.username,
    password: payload.password
  });
  return fetch(config.USER_URL, fetchOptions)
    .then(response => response.json())
    .then(json => json);
}

export default signUserIn;
