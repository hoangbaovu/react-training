let initState = [];

let tasks = JSON.parse(localStorage.getItem('task'));
initState = (tasks !== null && tasks.length > 0) ? tasks : initState;
const items = (state = initState, action) => {
  switch (action.type) {
    case 'ClOSE_FORM':
      state = false;
      return state;
    case 'OPEN_FORM':
      state = true;
      return state;
    case 'TOGGLE_FORM':
      state = !state;
      return state;
    default:
      return state;
  }
}

export default items;