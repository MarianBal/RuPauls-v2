import { queensTypes } from './../constants/actionTypes/queens';

const queensManagement = (state = [], action) => {
  switch (action.type) {
    case queensTypes.addQueens:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default queensManagement;
