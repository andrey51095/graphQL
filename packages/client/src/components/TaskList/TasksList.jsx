import React from 'react'

import Task from '../Task'

const TasksList = ({tasks = []}) => (
  <>
    {tasks.map(task => <Task key={task.id} task={task} />)}
  </>
);

export default TasksList;
