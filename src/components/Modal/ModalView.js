import React from 'react';

import { classNames } from '../../constants/classnames';
import './modal.scss';

const { modalBackground, modalContainer } = classNames.modal;

const ModalView = () => (
  <div className={modalBackground}>
    <div className={modalContainer}>Hola</div>
  </div>
);
export default ModalView;
