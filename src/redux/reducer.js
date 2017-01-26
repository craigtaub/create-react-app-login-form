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
        isFetching: true,
        errorMessage: initialState.errorMessage // dont like it but its always needed
      });
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        user: action.user,
        isFetching: initialState.isFetching
      });
    case RECEIVED_ERROR:
      return Object.assign({}, state, {
        errorMessage: 'Something went wrong',
        isFetching: initialState.isFetching
      });
    case RECEIVED_LOGOUT:
      return Object.assign({}, state, initialState);
    default:
      return state
  }
}

export default user;
