import { combineReducers } from 'redux';
import isShowForm from './isShowForm';
import sort from './sort';
import search from './search';
import items from './items';

const appReducers = combineReducers({
  isShowForm,
  sort,
  search,
  items
});

export default appReducers;