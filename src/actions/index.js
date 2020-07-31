import { queensTypes } from './../constants/actionTypes/queens';

export const addAllQueens = ({ data }) => ({
  type: queensTypes.addQueens,
  data
});

export const addAllCongeniality = ({ data }) => ({
  type: queensTypes.addCongeniality,
  data
});

export const addAllWinners = ({ data }) => ({
  type: queensTypes.addWinners,
  data
});

export const addOneSeason = ({ data }) => ({
  type: queensTypes.addSeason,
  data
});

export const addOneQueen = ({ data }) => ({
  type: queensTypes.singleQueen,
  data
});
