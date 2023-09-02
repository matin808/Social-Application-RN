import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import {Reducers} from './reducers/Reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  reducers: Reducers,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
