import { getAllQueens } from './../../utils/call';

export const getQueens = async getData => {
  const response = await getAllQueens();
  if (response.data) {
    getData(response.data);
  }
};
