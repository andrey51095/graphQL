import React from 'react'
import assign from 'lodash/assign';
import { useMutation } from '@apollo/react-hooks';

import Button from '../Button';
import history, {taskUrl} from '../../routing';
import {shrinkTextToSize} from '../../utils';

import {DELETE_TASK_MUTATION} from '../../graphQl';

import {$container, $title, $disabled, $hidden} from './styles';



const Task = ({task, draggable = false, refetch, status}) => {
  const [{disabled, hidden}, setStyle] = React.useReducer((state, action) => ({...state, ...action}), {disabled: false, hidden: false})
  const [deleteTask] = useMutation(DELETE_TASK_MUTATION);

  const {id, title} = task;

  const goToDetails = () => history.push(`${taskUrl}?${id}`);

  const deleteTaskEvent = async () => {
    await deleteTask({variables: {id}})
    setStyle({disabled: true});
    await refetch();
  }
  const dragStart = e => {
    e.dataTransfer.setData('task-id', id);
    e.dataTransfer.setData('task-status', status);

    setTimeout(() => {setStyle({hidden: true});}, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  }

  const dragEnd = async e => {
    e.preventDefault();
    await refetch();
    setStyle({hidden: false});
  }

  return (
    <div
      style={assign({}, $container, disabled && $disabled, hidden && $hidden)}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      <div style={$title}>
        {shrinkTextToSize(title, 8)}
      </div>
      <Button title={'Details'} clickEvent={goToDetails}/>
      <Button title={'Delete'} clickEvent={deleteTaskEvent}/>
    </div>
  );
}

export default Task