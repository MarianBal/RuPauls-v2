import { getAllCongeniality, getAllWinners } from '../../utils/call';

export const congeniality = (
  setCongeniality,
  setAllQueens,
  setWinners,
  getCongeniality
) => () => {
  setCongeniality(true);
  setAllQueens(false);
  setWinners(false);
  getMissCongeniality(getCongeniality);
};

export const allQueens = (setCongeniality, setAllQueens, setWinners) => () => {
  setCongeniality(false);
  setAllQueens(true);
  setWinners(false);
};

export const winners = (
  setCongeniality,
  setAllQueens,
  setWinners,
  addAllWinners
) => () => {
  setCongeniality(false);
  setAllQueens(false);
  setWinners(true);
  getWinners(addAllWinners);
};

const getMissCongeniality = async getCongeniality => {
  const response = await getAllCongeniality();
  getCongeniality(response.data);
};

const getWinners = async addAllWinners => {
  const response = await getAllWinners();
  addAllWinners(response.data);
};
