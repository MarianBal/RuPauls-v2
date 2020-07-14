import React from 'react';

import { classNames } from './../../constants/classnames';
import Header from './../Header';
import Content from './../Content';
import './mainapp.scss';

const MainappView = ({ handleSearchSeason, searchSeason }) => (
  <div className={classNames.mainapp.mainBackground}>
    <Header handleSearchSeason={handleSearchSeason} />
    <Content searchSeason={searchSeason} />
  </div>
);
export default MainappView;
