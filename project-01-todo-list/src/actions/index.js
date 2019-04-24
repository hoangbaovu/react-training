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

export const actionSubmitForm = item => {
  return {
    type: types.SUBMIT_FORM,
    item
  }
}

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

export const actionDeleteItem = id => {
  return {
    type: types.DELETE_ITEM,
    id
  }
};