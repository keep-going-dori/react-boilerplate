import { call, put, takeEvery, fork, all } from 'redux-saga/effects';
import { loginStart, loginSuccess } from './userSlice';
import { userLogin } from '../../api';
import { PayloadAction } from '@reduxjs/toolkit';

interface LoginCredentials {
  username: string;
  password: string;
}

function* login(action: PayloadAction<LoginCredentials>) {
  try {
    const response: LoginCredentials = yield call(userLogin, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

function* watchLoginUser() {
  yield takeEvery(loginStart, login);
}
export default function* userSaga() {
  yield all([fork(watchLoginUser)]);
}
