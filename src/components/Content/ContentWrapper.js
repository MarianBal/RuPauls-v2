import React, { useState } from 'react';
import { connect } from 'react-redux';

import ContentView from './ContentView';

const ContentWrapper = ({ savedQueens, congenialityQueens, winnersQueens }) => {
  const [congeniality, setCongeniality] = useState(false);
  const [allQueens, setAllQueens] = useState(true);
  const [winners, setWinners] = useState(false);

  return (
    <ContentView
      queens={
        allQueens
          ? savedQueens
          : congeniality
          ? congenialityQueens
          : winners
          ? winnersQueens
          : savedQueens
      }
      setCongeniality={setCongeniality}
      setAllQueens={setAllQueens}
      setWinners={setWinners}
    />
  );
};

const mapStateToProps = ({ queens, congeniality, winners }) => {
  return {
    savedQueens: queens,
    congenialityQueens: congeniality,
    winnersQueens: winners
  };
};

export default connect(mapStateToProps)(ContentWrapper);
