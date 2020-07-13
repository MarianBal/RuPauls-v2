import { queensTypes } from './../constants/actionTypes/queens';

export const addAllQueens = ({ data }) => ({
  type: queensTypes.addQueens,
  data
});
