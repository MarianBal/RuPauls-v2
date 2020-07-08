import React from 'react';

import { classNames } from './../../constants/classnames';
import Header from './../Header';
import './mainapp.scss';

const MainappView = () => (
  <div className={classNames.mainapp.mainBackground}>
    <Header />;
  </div>
);
export default MainappView;
