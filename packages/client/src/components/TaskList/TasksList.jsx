import React, {memo} from 'react';
import classNames from 'classnames';

import Ticket from '../Ticket/Ticket';

import Style from './index.module.css';

const TasksList = ({loading, tasks = [], ...rest}) => {
  console.log('tasks: ', tasks);
  return (
  <>
    <div className={classNames(Style.container, {[Style.containerLoading]: loading})}>
      {tasks.map(task => <Ticket key={task.id} {...task} {...rest}/>)}
    </div>
    {loading && <div className={classNames(Style.loading)}>loading ...</div>}
  </>
)};

export default memo(TasksList);

// <Task key={task.id} task={task} draggable={true} {...rest}/>