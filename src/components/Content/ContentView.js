import React from 'react';

import { classNames } from './../../constants/classnames';
import { translations } from './../../constants/translations';
import ButtonGroup from './../ButtonGroup';
import './content.scss';
const {
  contentBackground,
  eachSeason,
  contentTitle,
  queensContent,
  eachQueen,
  queenImage,
  queenName
} = classNames.content;
const { allQueens } = translations.content;

const ContentView = ({ queens, setCongeniality, setAllQueens, setWinners }) => (
  <div>
    <div className={contentBackground}>
      <ButtonGroup
        setCongeniality={setCongeniality}
        setAllQueens={setAllQueens}
        setWinners={setWinners}
      />

      <div className={eachSeason}>
        <div className={contentTitle}>{allQueens}</div>

        <div className={queensContent}>
          {queens.map(queen => (
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
