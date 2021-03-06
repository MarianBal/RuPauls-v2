import React, { useState } from 'react';
import { connect } from 'react-redux';

import ContentView from './ContentView';
import { translations } from './../../constants/translations';
import { getSingleQueen } from './helper';
import { addValue } from '../../utils/handleSetter';

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
  seasonQueens
}) => {
  const [congeniality, setCongeniality] = useState(false);
  const [allQueens, setAllQueens] = useState(true);
  const [winners, setWinners] = useState(false);
  const [queen, setQueen] = useState(null);

  console.log(queen);

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
      getSingleQueen={getSingleQueen(setQueen)}
      queen={queen}
      closeModal={addValue(setQueen, null)}
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

export default connect(mapStateToProps)(ContentWrapper);
