import React from 'react';

import { classNames } from './../../constants/classnames';
import { translations } from './../../constants/translations';
import './content.scss';
const {
  contentBackground,
  buttonGroup,
  eachSeason,
  contentTitle,
  contentSubtitle,
  queens
} = classNames.content;
const { missCongeniality, allQueens, winners } = translations.content;

const ContentView = ({ savedQueens }) => (
  <div>
    <div className={contentBackground}>
      <ul className={buttonGroup}>
        <li>{missCongeniality}</li>
        <li>{allQueens}</li>
        <li>{winners}</li>
      </ul>

      <div className={eachSeason}>
        <div className={contentTitle}>{allQueens}</div>

        <div className={queens}>
          {savedQueens.map(queen => (
            <h1>{queen.name}</h1>
          ))}
          {/* <div className={contentSubtitle}>Season 01</div> */}
        </div>
      </div>
    </div>
  </div>
);
export default ContentView;
