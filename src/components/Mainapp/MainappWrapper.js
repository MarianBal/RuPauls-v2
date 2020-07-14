import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import MainappView from './MainappView';
import { getQueens } from './helper';
import { addAllQueens } from './../../actions';
import { handleValue } from '../../utils/handleSetter';

const MainappWrapper = ({ saveAllQueens }) => {
  const [searchSeason, setSearchSeason] = useState(false);
  useEffect(() => {
    getQueens(saveAllQueens);
  }, [saveAllQueens]);

  return (
    <MainappView
      handleSearchSeason={handleValue(setSearchSeason, searchSeason)}
      searchSeason={searchSeason}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    saveAllQueens: data => dispatch(addAllQueens({ data }))
  };
};

export default connect(null, mapDispatchToProps)(MainappWrapper);
