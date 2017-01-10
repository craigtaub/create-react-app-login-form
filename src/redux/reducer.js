import {
  RECEIVE_LOGIN,
  REQUEST_LOGIN,
  RECEIVED_ERROR,
  RECEIVED_LOGOUT
} from './constants';

const initialState = {
  isFetching: false,
  user: {
    success: false, id: null
  },
  errorMessage: null
};

function user(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        user: action.user
      });
    case RECEIVED_ERROR:
      return Object.assign({}, state, {
        errorMessage: 'Something went wrong'
      });
    case RECEIVED_LOGOUT:
      return Object.assign({}, state, initialState);
    default:
      return state
  }
}

export default user;

// add more with combineReducers
// current store = isFetching, user, errorMessage
