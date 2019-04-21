const initState = [
  { id: "A1", name: "coding store", level: 0 },
  { id: "A2", name: "hihih store", level: 1 },
  { id: "A3", name: "hehe store", level: 2 },
];

const items = (state = [initState], action) => {
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