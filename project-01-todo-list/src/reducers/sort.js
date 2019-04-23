const initState = { orderBy: 'level', orderDir: 'asc' };

const sort = (state = initState, action) => {
  let { orderBy, orderDir } = action
  switch (action.type) {
    case 'SORT_ITEM':
      return {
        orderBy,
        orderDir
      };
    default:
      return state;
  }
}

export default sort;