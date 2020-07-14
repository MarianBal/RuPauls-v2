import React, { useState } from 'react';
import { connect } from 'react-redux';

import HeaderView from './HeaderView';
import { handleFilter } from './Helper';
import { handleEvent } from '../../utils/handleSetter';
import { addOneSeason } from './../../actions';

const HeaderWrapper = ({ handleSearchSeason, addOneSeason }) => {
  const [season, setSeason] = useState('');

  return (
    <HeaderView
      handleFilter={handleFilter(season, addOneSeason, handleSearchSeason)}
      handleValue={handleEvent(setSeason)}
    />
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addOneSeason: data => dispatch(addOneSeason({ data }))
  };
};

export default connect(null, mapDispatchToProps)(HeaderWrapper);
