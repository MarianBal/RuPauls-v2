import React from 'react';
import { connect } from 'react-redux';

import ButtonGroupView from './ButtonGroupView';
import { addAllCongeniality, addAllWinners } from './../../actions';
import { congeniality, allQueens, winners } from './helper';
const ButtonGroupWrapper = ({
  setCongeniality,
  setAllQueens,
  setWinners,
  getAllCongeniality,
  getAllWinners
}) => {
  return (
    <ButtonGroupView
      congeniality={congeniality(
        setCongeniality,
        setAllQueens,
        setWinners,
        getAllCongeniality
      )}
      allQueens={allQueens(setCongeniality, setAllQueens, setWinners)}
      winners={winners(
        setCongeniality,
        setAllQueens,
        setWinners,
        getAllWinners
      )}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCongeniality: data => dispatch(addAllCongeniality({ data })),
    getAllWinners: data => dispatch(addAllWinners({ data }))
  };
};

export default connect(null, mapDispatchToProps)(ButtonGroupWrapper);
