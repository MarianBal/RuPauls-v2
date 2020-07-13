import { getQueens } from './api';
import { caller } from './caller';

export const getAllQueens = async () => {
  const response = await caller(getQueens());
  return response;
};
