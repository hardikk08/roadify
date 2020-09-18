import {
  REDUX,
  REDUX_LOGGER,
  REDUX_SAGA,
  EMOTION,
  TEST_SAGA,
} from './constants';

export function testSaga(testString: string) {
  return {
    type: TEST_SAGA,
    testString,
  }
}

export function redux(time: number) {
  return {
    type: REDUX,
    time
  };
};

export function reduxSaga(time: number) {
  return {
    type: REDUX_SAGA,
    time
  };
};

export function reduxLogger(time: number) {
  return {
    type: REDUX_LOGGER,
    time
  };
};

export function emotion(time: number) {
  return {
    type: EMOTION,
    time
  };
};