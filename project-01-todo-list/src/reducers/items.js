import { remove } from 'lodash';
import * as types from '../constants/ActionTypes';
import * as config from '../constants/Config';

let initState = [];

let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STORAGE));
initState = (tasks !== null && tasks.length > 0) ? tasks : initState;
const items = (state = initState, action) => {
  switch (action.type) {
    case types.DELETE_ITEM:
      const id = action.id;
      remove(state, (item) => {
        return item.id === id;
      });
      localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default items;