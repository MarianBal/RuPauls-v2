import React from 'react';

import { classNames } from './../../constants/classnames';
import { translations } from './../../constants/translations';
import rupaul from '../../img/rupaul.png';

import './header.scss';
const { placeholder, alt } = translations.header;

const HeaderView = () => (
  <nav>
    <input placeholder={placeholder} />
    <div className={classNames.header.logo}>
      <img src={rupaul} alt={alt} />
    </div>
  </nav>
);
export default HeaderView;