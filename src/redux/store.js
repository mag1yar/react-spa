import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedState = localStorage.getItem('redux-state')
//   ? JSON.parse(localStorage.getItem('redux-state'))
//   : {};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

// store.subscribe(() => {
//   localStorage.setItem('redux-state', JSON.stringify(store.getState()));
// });

export default store;
