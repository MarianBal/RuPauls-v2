import { queensTypes } from './../constants/actionTypes/queens';

const singleQueenManagement = (state = {}, action) => {
  switch (action.type) {
    case queensTypes.singleQueen:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default singleQueenManagement;
