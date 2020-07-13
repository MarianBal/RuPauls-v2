import { queensTypes } from './../constants/actionTypes/queens';

const congenialityManagement = (state = [], action) => {
  switch (action.type) {
    case queensTypes.addCongeniality:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default congenialityManagement;
