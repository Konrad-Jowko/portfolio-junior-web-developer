import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer as globalReducer } from './globalRedux';
import { reducer as headerReducer } from './headerRedux';
import { reducer as portfolioReducer } from './portfolioRedux';
import { reducer as aboutReducer } from './aboutRedux';
import { reducer as contactReducer } from './contactRedux';

/* DEFINE REDUCERS */
const reducers = {
  global: globalReducer,
  header: headerReducer,
  portfolio: portfolioReducer,
  about: aboutReducer,
  contact: contactReducer,
};

/* ADD BLANK REDUCERS FOR INITIAL STATE PROPERTIES WITHOUT REDUCERS */
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

/* CREATE STORE */
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
