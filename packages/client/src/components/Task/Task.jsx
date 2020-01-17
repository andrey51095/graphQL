import React from 'react'

import CloseTaskButton from '../CloseTaskButton';
import history, {taskUrl} from '../../routing';

import {$container, $title} from './styles';

const Task = ({task}) => {
  console.log('history: ', history);
  const {id, title} = task || {};

  const goToTask = () => history.push(`${taskUrl}?${id}`);

  return (
    <div style={$container}>
      <div style={$title} onClick={goToTask}>
        {title}
      </div>
      <CloseTaskButton id={id} />
    </div>
  );
}

export default Task