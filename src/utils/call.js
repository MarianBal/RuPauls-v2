import { getQueens, getCongeniality, getWinners } from './api';
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
