let initState = [
  {id: "A1", name: "codeing", level: 1},
  {id: "A2", name: "Giặt áo", level: 0},
  {id: "A3", name: "Giặt quần", level: 1},
  {id: "A4", name: "Lau sàn", level: 2},
];

let tasks = JSON.parse(localStorage.getItem('task'));
initState = (tasks !== null && tasks.length > 0) ? tasks : initState;
const items = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default items;