import React from 'react';

import {useMutation} from '@apollo/react-hooks';
import assign from 'lodash/assign';

import {SET_TASK_STATUS} from '../../graphQl';

import {$container, $loading} from './styles';
import BlockHeader from '../BlockHeader';

const Block = ({children, status}) => {
  const [setStatus, {loading}] = useMutation(SET_TASK_STATUS);

  const drop = e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('task-id');

    setStatus({variables: {id, status}});
  };

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div
      style={assign({}, $container, loading ? $loading : {})}
      onDrop={drop}
      onDragOver={dragOver}
    >
      <BlockHeader title={status}/>
      {children}
    </div>
  );
};

export default Block;
