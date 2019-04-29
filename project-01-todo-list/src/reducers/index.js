import { combineReducers } from 'redux';
import isShowForm from './isShowForm';
import sort from './sort';
import search from './search';
import items from './items';
import itemSelected from './itemSelected';

const appReducers = combineReducers({
  isShowForm,
  sort,
  search,
  items,
  itemSelected
});

export default appReducers;