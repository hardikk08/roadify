import { combineReducers } from 'redux';
import app from '../containers/App/reducers';

export default function createReducer () {
  return combineReducers({app});
};