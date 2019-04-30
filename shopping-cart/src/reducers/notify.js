import * as types from './../constants/ActionTypes';
import * as configs from './../constants/Config';

let initState = configs.NOTI_READY_TO_BUY;

const notify = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_NOTIFY:
      return action.content;
    default:
      return state;
  }
}

export default notify;