import { takeEvery } from 'redux-saga/effects';
import {
  REDUX,
  REDUX_LOGGER,
  REDUX_SAGA,
  EMOTION,
} from './constants';

function* showRedux(action: any) {
  console.log('Saga: showReduxSaga is called');
  yield new Promise(resolve => setTimeout(() => resolve(true), action.time));
};

function* showReduxSaga(action: any) {
  console.log('Saga: showReduxSagaSaga is called');
  yield new Promise(resolve => setTimeout(() => resolve(true), action.time));
};

function* showReduxLogger(action: any) {
  console.log('Saga: showReduxLoggerSaga is called');
  yield new Promise(resolve => setTimeout(() => resolve(true), action.time));
};

function* showEmotion(action: any) {
  console.log('Saga: showEmotionSaga is called');
  yield new Promise(resolve => setTimeout(() => resolve(true), action.time));
};

function* showReduxWatcher() {
  yield takeEvery(REDUX, showRedux);
}

function* showReduxSagaWatcher() {
  yield takeEvery(REDUX_SAGA, showReduxSaga);
}

function* showReduxLoggerWatcher() {
  yield takeEvery(REDUX_LOGGER, showReduxLogger);
}

function* showEmotionWatcher() {
  yield takeEvery(EMOTION, showEmotion);
}

export default {
  showReduxWatcher,
  showReduxSagaWatcher,
  showReduxLoggerWatcher,
  showEmotionWatcher
}