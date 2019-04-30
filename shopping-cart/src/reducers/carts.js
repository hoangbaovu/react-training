import * as types from './../constants/ActionTypes';
import * as configs from './../constants/Config';

let initState = [];
let cartItems = JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
initState = (cartItems !== null && cartItems > 0) ? cartItems : initState;

const carts = (state = initState, action) => {
  switch (action.type) {
    case types.BUY_PRODUCT:
      return state;
    case types.UPDATE_PRODUCT:
      return state;
    case types.REMOVE_PRODUCT:
      return state;
    default:
      return state;
  }
}

export default carts;