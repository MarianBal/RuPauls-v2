import React, { useState } from 'react';
import { connect } from 'react-redux';

import ContentView from './ContentView';
import { translations } from './../../constants/translations';
import { addOneQueen } from '../../actions';
import { getSingleQueen } from './helper';

const {
  allQueensText,
  missCongeniality,
  winnersText,
  searchSeasonText
} = translations.content;

const ContentWrapper = ({
  searchSeason,
  savedQueens,
  congenialityQueens,
  winnersQueens,
  seasonQueens,
  saveSingleQueen
}) => {
  const [congeniality, setCongeniality] = useState(false);
  const [allQueens, setAllQueens] = useState(true);
  const [winners, setWinners] = useState(false);

  return (
    <ContentView
      queens={
        searchSeason
          ? seasonQueens
          : allQueens
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
      titletext={
        searchSeason
          ? searchSeasonText
          : allQueens
          ? allQueensText
          : congeniality
          ? missCongeniality
          : winners
          ? winnersText
          : allQueensText
      }
      getSingleQueen={getSingleQueen(saveSingleQueen)}
    />
  );
};

const mapStateToProps = ({ queens, congeniality, winners, season }) => {
  return {
    savedQueens: queens,
    congenialityQueens: congeniality,
    winnersQueens: winners,
    seasonQueens: season
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveSingleQueen: data => dispatch(addOneQueen({ data }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentWrapper);
