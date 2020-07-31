import { getOneQueen } from '../../utils/call';

export const getSingleQueen = saveQueen => id => {
  getQueen(saveQueen, id);
};

export const getQueen = async (saveQueen, id) => {
  const response = await getOneQueen(id);
  if (response.data) saveQueen(response.data);
  console.log(response.data);
};
