import * as types from '../constants/ActionTypes';

let initState = {
  id: '',
  name: '',
  level: 0
};

const itemSelected = (state = initState, action) => {
  switch (action.type) {
    case types.SELECT_ITEM:
      return action.item;
    case types.UNSELECT_ITEM:
      return initState;
    default:
      return state;
  }
}

export default itemSelected;