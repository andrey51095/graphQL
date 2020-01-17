import React from 'react';

import {container} from './styles';
import BlockHeader from '../BlockHeader';

const Block = ({children, title}) => {

  return (
    <div style={container}>
      <BlockHeader title={title}/>
      {children}
    </div>
  );
};

export default Block;
