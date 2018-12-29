import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const createStore = ()=>{
//Middleware
const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk,createLogger()];

//Enhancers
//add support for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = {};

const store = createReduxStore(
  rootReducer(),
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
);

return store;
}
