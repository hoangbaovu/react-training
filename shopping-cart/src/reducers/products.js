import * as types from './../constants/ActionTypes';

let initState = [
  {
    id: 'A1',
    name: 'aplusautomation',
    image: 'aplusautomation.jpg',
    summary: 'Lorem',
    price: 12,
    canBuy: true
  },
  {
    id: 'A2',
    name: 'aplus-media',
    image: 'aplus-media.jpg',
    summary: 'Lorem',
    price: 3,
    canBuy: true
  },
  {
    id: 'A3',
    name: 'robo_fig_combo',
    image: 'robo_fig_combo.jpg',
    summary: 'Lorem',
    price: 5,
    canBuy: false
  },
  {
    id: 'A5',
    name: 'target-leap-frog',
    image: 'target-leap-frog.jpg',
    summary: 'Lorem',
    price: 6,
    canBuy: true
  }
];

const products = (state = initState, action) => {
  switch (action.type) {
    case types.LIST_PRODUCT:
      return state;
    default:
      return state;
  }
}

export default products;