import { all } from 'redux-saga/effects';
import aboutSagas from '../About/saga';

export default function* rootSagas() {
  yield all([
    aboutSagas.showEmotionWatcher,
    aboutSagas.showReduxLoggerWatcher,
    aboutSagas.showReduxSagaWatcher,
    aboutSagas.showReduxWatcher,
  ])
};