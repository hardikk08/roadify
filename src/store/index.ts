import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createReducer from './reducers';
import rootSagas from './sagas';

declare var window: any;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState: any) => {
  // add middlewares
  const middlewares = [
    sagaMiddleware,
    createLogger({timestamp: true})
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );
  
  sagaMiddleware.run(rootSagas);
  return store;
};

export default configureStore;