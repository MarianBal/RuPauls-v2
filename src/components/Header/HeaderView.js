import React from 'react';

import { classNames } from './../../constants/classnames';
import { translations } from './../../constants/translations';
import rupaul from '../../img/rupaul.png';

import './header.scss';
const { placeholder, alt, number } = translations.header;

const HeaderView = ({ handleFilter, handleValue }) => (
  <nav>
    <input
      type={number}
      placeholder={placeholder}
      onKeyPress={handleFilter}
      onChange={handleValue}
    />
    <div className={classNames.header.logo}>
      <img src={rupaul} alt={alt} />
    </div>
  </nav>
);
export default HeaderView;
