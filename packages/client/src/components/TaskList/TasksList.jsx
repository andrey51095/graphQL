import React from 'react'

import Task from '../Task'

import { useQuery } from '@apollo/react-hooks';

import {QUERY_TASKS_TITLE_BY_STATUS} from '../../graphQl';

const TasksList = ({status}) => {

  const {loading, error, data} = useQuery(QUERY_TASKS_TITLE_BY_STATUS, {pollInterval: 1000, variables: {status}});

  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error :{error.message}</div>

  const tasks = data.tasksByStatus || [];

  return(
    <>
      {tasks.map(task => <Task key={task.id} task={task} draggable={true}/>)}
    </>
  )
}

export default TasksList ;
