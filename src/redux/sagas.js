import { call, put, takeLatest } from 'redux-saga/effects';
import signUserIn from './signUserIn';
import {
  RECEIVE_LOGIN,
  REQUEST_LOGIN,
  RECEIVED_ERROR
} from './constants';

function* signinUser(action) {
   try {
      const user = yield call(signUserIn, action.payload);
      if (!user.success) {
        throw new Error();
      }
      yield put({type: RECEIVE_LOGIN, user: user});
   } catch (e) {
      yield put({type: RECEIVED_ERROR, message: 'e.message'});
   }
}

function* mySaga() {
  yield takeLatest(REQUEST_LOGIN, signinUser);
}

export default mySaga;
