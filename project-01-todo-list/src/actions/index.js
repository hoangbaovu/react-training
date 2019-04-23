import * as types from './../constants/ActionTypes';

export const actionCloseForm = () => {
  return {
    type: types.CLOSE_FORM
  }
};

export const actionOpenForm = () => {
  return {
    type: types.OPEN_FORM
  }
};

export const actionToggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
};

export const actionSort = (orderBy, orderDir) => {
  return {
    type: types.SORT_ITEM,
    orderBy,
    orderDir,
  }
};

export const actionSearch = search => {
  return {
    type: types.CHANGE_SEARCH,
    search
  }
};