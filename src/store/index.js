import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    // Redux dev tools helps to see the state and actions in dev console -> only for dev purpose
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ), 
);

sagaMiddleware.run(rootSaga);

export default store;