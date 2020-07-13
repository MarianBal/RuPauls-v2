import React from 'react';
import { connect } from 'react-redux';

import ContentView from './ContentView';

const ContentWrapper = ({ savedQueens }) => (
  <ContentView savedQueens={savedQueens} />
);

const mapStateToProps = ({ queens }) => {
  return {
    savedQueens: queens
  };
};

export default connect(mapStateToProps)(ContentWrapper);
