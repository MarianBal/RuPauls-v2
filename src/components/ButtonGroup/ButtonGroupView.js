import React from 'react';

import { classNames } from './../../constants/classnames';
import { translations } from './../../constants/translations';
import './buttongroup.scss';

const { buttonGroup } = classNames.content;
const { missCongeniality, allQueensText, winnersText } = translations.content;

const ButtonGroupView = ({ congeniality, allQueens, winners }) => (
  <ul className={buttonGroup}>
    <li onClick={congeniality}>{missCongeniality}</li>
    <li onClick={allQueens}>{allQueensText}</li>
    <li onClick={winners}>{winnersText}</li>
  </ul>
);

export default ButtonGroupView;
