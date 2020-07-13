import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MainappView from './MainappView';
import { getQueens } from './helper';
import { addAllQueens } from './../../actions';

const MainappWrapper = ({ saveAllQueens }) => {
  useEffect(() => {
    getQueens(saveAllQueens);
  }, [saveAllQueens]);

  return <MainappView />;
};

const mapDispatchToProps = dispatch => {
  return {
    saveAllQueens: data => dispatch(addAllQueens({ data }))
  };
};

export default connect(null, mapDispatchToProps)(MainappWrapper);
