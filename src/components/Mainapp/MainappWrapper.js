import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MainappView from './MainappView';
import { getQueens } from './helper';
import { addAllQueens } from './../../actions';

const MainappWrapper = ({ addSlotInManagement }) => {
  useEffect(() => {
    getQueens(addSlotInManagement);
  }, [addSlotInManagement]);

  return <MainappView />;
};

const mapDispatchToProps = dispatch => {
  return {
    addSlotInManagement: data => dispatch(addAllQueens({ data }))
  };
};

export default connect(null, mapDispatchToProps)(MainappWrapper);
