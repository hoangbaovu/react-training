let initState = [{
  id: "A1", name: "codeing", level: 1
}];

let tasks = JSON.parse(localStorage.getItem('task'));
initState = (tasks !== null && tasks.length > 0) ? tasks : initState;
const items = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default items;