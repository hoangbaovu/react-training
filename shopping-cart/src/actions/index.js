import * as types from '../constants/ActionTypes';

export const actionListProduct = () => {
  return {
    type: types.LIST_PRODUCT
  }
}

export const actionBuyProduct = (product, quantity) => {
  return {
    type: types.BUY_PRODUCT,
    product,
    quantity
  }
}

export const actionUpdateProduct = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
    quantity
  }
}

export const actionRemoveProduct = (product) => {
  return {
    type: types.REMOVE_PRODUCT,
    product
  }
}

export const actionChangeNotify = (content) => {
  return {
    type: types.CHANGE_NOTIFY,
    content
  }
}