import * as React from 'react';

import {$container} from './styles';

const Layout = ({children}) => (
  <div style={$container}>
    {children}
  </div>
);


export default Layout;
