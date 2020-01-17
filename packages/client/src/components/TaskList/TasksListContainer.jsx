import React from 'react'

import { useQuery } from '@apollo/react-hooks';

import TasksList from './TasksList';

import {QUERY_TASKS_TITLE_BY_STATUS} from '../../graphQl';

const TasksListContainer = ({status}) => {

  const {loading, error, data} = useQuery(QUERY_TASKS_TITLE_BY_STATUS, {pollInterval: 500, variables: {status}});
  console.log('data: ', data);
  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error :{error.message}</div>

  const linksToRender = data.tasksByStatus

  return(
    <>
      <TasksList tasks={linksToRender}/>
    </>
  )
}

export default TasksListContainer ;
