import { getOneSeason } from '../../utils/call';

export const handleFilter = (
  data,
  addOneSeason,
  handleSearchSeason
) => event => {
  if (event.key === 'Enter') {
    searchSeason(data, addOneSeason, handleSearchSeason);
  }
};

const searchSeason = async (data, addOneSeason, handleSearchSeason) => {
  const response = await getOneSeason(data);
  addOneSeason(response.data.queens);
  handleSearchSeason(true);
};
