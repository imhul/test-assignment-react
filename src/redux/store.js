
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootSaga from '../saga';
import rootReducer from '../redux';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      logger,
    ),
  ),
);

sagaMiddleware.run(rootSaga);
window.store = store;
