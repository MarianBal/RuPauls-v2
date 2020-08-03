import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { classNames } from '../../constants/classnames';
import { translations } from '../../constants/translations';
import './modal.scss';

const {
  modalBackground,
  modalContainer,
  modalPic,
  imageContainer,
  close,
  dataContainer,
  seasonContainer,
  lipsyncsContainer
} = classNames.modal;

const {
  winner,
  missCongeniality,
  seasons,
  place,
  lipsyncText
} = translations.modal;

const ModalView = ({ queen, closeModal }) => (
  <div className={modalBackground}>
    <div className={modalContainer}>
      <div className={close} onClick={closeModal}>
        <FaTimes />
      </div>
      <div className={imageContainer}>
        <div
          className={modalPic}
          style={{
            backgroundImage: `url(${queen.image_url})`
          }}
        />
      </div>
      <div className={dataContainer}>
        <h1>{queen.name}</h1>
        <p>{queen.quote}</p>
        {queen.winner && <p>{winner}</p>}
        {queen.missCongeniality && <p>{missCongeniality}</p>}

        <div className={seasonContainer}>
          {queen.seasons.map(season => (
            <div key={queen.id}>
              <b>{seasons}</b>
              {season.seasonNumber}
              {place}
              {season.place}
            </div>
          ))}
        </div>
        <div className={lipsyncsContainer}>
          {queen.lipsyncs.map(lipsync => (
            <div key={queen.id}>
              <b>{lipsyncText}</b>
              {lipsync.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default ModalView;
