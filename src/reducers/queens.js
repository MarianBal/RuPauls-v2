import { queensTypes } from './../constants/actionTypes/queens';

const management = (state = [], action) => {
  switch (action.type) {
    case queensTypes.addQueens:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default management;
