import { queensTypes } from './../constants/actionTypes/queens';

const seasonManagement = (state = [], action) => {
  switch (action.type) {
    case queensTypes.addSeason:
      return [...action.data];
    default:
      return state;
  }
};

export default seasonManagement;
