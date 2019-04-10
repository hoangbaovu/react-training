import { combineReducers } from 'redux';
import isShowForm from './isShowForm';
import sort from './sort';

const appReducers = combineReducers({
  isShowForm,
  sort
});

export default appReducers;