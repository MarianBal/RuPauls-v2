import React from 'react';

import { classNames } from './../../constants/classnames';
import Header from './../Header';
import Content from './../Content';
import './mainapp.scss';

const MainappView = () => (
  <div className={classNames.mainapp.mainBackground}>
    <Header />
    <Content />
  </div>
);
export default MainappView;
