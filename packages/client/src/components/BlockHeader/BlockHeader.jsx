import React from 'react'

import {$header} from './styles';

const BlockHeader = ({title}) =>  (
  <div style={$header}>
    {title}
  </div>
);

export default BlockHeader;
