import { combineReducers } from 'redux';
import about from '../About/reducer';

export default function createReducer () {
  return combineReducers({about});
};