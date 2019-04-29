import { remove, reject } from 'lodash';
import * as types from '../constants/ActionTypes';
import * as config from '../constants/Config';
const uuidv4 = require('uuid/v4');

let initState = [];

let tasks = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STORAGE));
initState = (tasks !== null && tasks.length > 0) ? tasks : initState;
const items = (state = initState, action) => {
  let id = null;
  switch (action.type) {
    case types.DELETE_ITEM:
      id = action.id;
      remove(state, (item) => {
        return item.id === id;
      });
      localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
      return [...state];
    case types.SUBMIT_FORM:
      let { item } = action;
      id = uuidv4();
      if (item.id !== '') { //edit
        state = reject(state, { id: item.id });
        id = item.id;
      } else {
        id = uuidv4();
      }

      state.push({
        id,
        name: item.name,
        level: +item.level
      });

      localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default items;