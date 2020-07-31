import {
  getQueens,
  getCongeniality,
  getWinners,
  getSeason,
  getSingleQueen
} from './api';
import { caller } from './caller';

export const getAllQueens = async () => {
  const response = await caller(getQueens());
  return response;
};

export const getAllCongeniality = async () => {
  const response = await caller(getCongeniality());
  return response;
};

export const getAllWinners = async () => {
  const response = await caller(getWinners());
  return response;
};

export const getOneSeason = async data => {
  const response = await caller(getSeason(data));
  return response;
};

export const getOneQueen = async data => {
  const response = await caller(getSingleQueen(data));
  return response;
};
