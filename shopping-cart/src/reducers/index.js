import { combineReducers } from 'redux';
import products from './products';
import notify from './notify';
import carts from './carts';

const appReducers = combineReducers({
  products,
  notify,
  carts
});

export default appReducers;