import React from 'react'

import assign from 'lodash/assign';

import CloseTaskButton from '../CloseTaskButton';
import history, {taskUrl} from '../../routing';

import {$container, $title, $disabled} from './styles';

const trimText = text => {
  if (text.length >= 12) {
    return `${text.slice(0, 12)} ...`
  }
  return text;
};

const Task = ({task, draggable = false}) => {
  const [disabled, setDisabled] = React.useState(false);
  const {id, title} = task;

  const goToDetails = () => history.push(`${taskUrl}?${id}`);

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('task-id', id);
    setTimeout(() => {target.style.display = 'none';}, 0)
  };

  const closeEvent = () => {
    setDisabled(true);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div
      style={assign({}, $container, disabled ? $disabled : {})}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <div style={$title}>
        {trimText(title)}
      </div>
      <button onClick={goToDetails}>Details</button>
      <CloseTaskButton id={id} closeEvent={closeEvent}/>
    </div>
  );
}

export default Task