
import * as types from '../constants/ActionTypes'
const initState = '';

const search = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH:
      return action.search;
    default:
      return state;
  }
}

export default search;