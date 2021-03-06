import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import {
  planetListReducer,
  planetInfoReducer,
  planetSearchReducer
} from './planets/reducer';

const rootReducer = combineReducers({
  planetListReducer,
  planetInfoReducer,
  planetSearchReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>;
export default store;