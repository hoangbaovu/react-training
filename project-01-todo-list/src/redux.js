import { createStore } from 'redux';
import appReducers from './reducers/index';
import { actionCloseForm, actionOpenForm, actionToggleForm, actionSort } from './actions/index';

const store = createStore(
  appReducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("Init: ", store.getState());

store.subscribe(() => {
  console.log(store.getState());
})

// CLOSE_FORM
store.dispatch(actionCloseForm());
console.log("CLOSE_FORM: ", store.getState());

// OPEN_FORM
store.dispatch(actionOpenForm());
console.log("OPEN_FORM: ", store.getState());

// TOGGLE_FORM
store.dispatch(actionToggleForm());
console.log("TOGGLE_FORM: ", store.getState());

// SORT
store.dispatch(actionSort('level', 'desc'));
console.log("SORT_ITEM: ", store.getState());

export default store;