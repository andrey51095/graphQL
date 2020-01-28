import React from 'react';

import Navigation from '../Navigation';
import Routing from '../Routing';

import Style from './index.module.css';

const  App = () => (
  <div className={Style.container}>
    <Navigation />
    <Routing />
  </div>
);

export default React.memo(App);
