import { fork } from 'redux-saga/effects';
import { academiesSaga } from './saga';

export default function* rootSaga() {
  yield fork(academiesSaga)
};
