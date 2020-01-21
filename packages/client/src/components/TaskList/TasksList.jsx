import React, {memo} from 'react';
import assign from 'lodash/assign';

import Task from '../Task';

import {$loading, $container, $containerLoading} from './styles';

const TasksList = ({loading, tasks = [], ...rest}) => (
  <>
    <div style={assign({}, $container, loading && $containerLoading)}>
      {tasks.map(task => <Task key={task.id} task={task} draggable={true} {...rest}/>)}
    </div>
    {loading && <div style={$loading}>loading ...</div>}
  </>
);

export default memo(TasksList);
