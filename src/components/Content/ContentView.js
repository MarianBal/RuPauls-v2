import React from 'react';

import { classNames } from './../../constants/classnames';
import { translations } from './../../constants/translations';
import './content.scss';
const {
  contentBackground,
  buttonGroup,
  eachSeason,
  contentTitle,
  queensContent,
  eachQueen,
  queenImage,
  queenName
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

        <div className={queensContent}>
          {savedQueens.map(queen => (
            <div className={eachQueen} key={queen.id}>
              <div className={queenImage}>
                <img src={queen.image_url} alt={queen.name} />
              </div>
              <p className={queenName}>{queen.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default ContentView;
