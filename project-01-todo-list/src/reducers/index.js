import { combineReducers } from 'redux';
import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';

const appReducers = combineReducers({
  isShowForm,
  sort,
  items
});

export default appReducers;