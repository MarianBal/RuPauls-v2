import React from 'react';

import { classNames } from './../../constants/classnames';
import ButtonGroup from './../ButtonGroup';
import Modal from './../Modal';
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

const ContentView = ({
  queens,
  setCongeniality,
  setAllQueens,
  setWinners,
  titletext,
  getSingleQueen,
  queen,
  closeModal
}) => (
  <>
    <div>
      <div className={contentBackground}>
        <ButtonGroup
          setCongeniality={setCongeniality}
          setAllQueens={setAllQueens}
          setWinners={setWinners}
        />
        {!queen && (
          <div className={eachSeason}>
            <div className={contentTitle}>{titletext}</div>

            <div className={queensContent}>
              {queens.map(queen => (
                <div
                  className={eachQueen}
                  key={queen.id}
                  onClick={() => getSingleQueen(queen.id)}
                >
                  {queen.image_url && (
                    <div className={queenImage}>
                      <img src={queen.image_url} alt={queen.name} />
                    </div>
                  )}

                  <p className={queenName}>{queen.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    {queen && <Modal queen={queen} closeModal={closeModal} />}
  </>
);
export default ContentView;
