import { queensTypes } from './../constants/actionTypes/queens';

const winnersManagement = (state = [], action) => {
  switch (action.type) {
    case queensTypes.addWinners:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default winnersManagement;
