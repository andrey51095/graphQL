import React from 'react';

import Navigation from '../Navigation';
import Routing from '../Routing';

import {$container} from './styles';

const  App = () => (
  <div style={$container}>
    <Navigation />
    <Routing />
  </div>
);

export default App;
