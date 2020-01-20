import React from 'react';

import { useQuery } from '@apollo/react-hooks';

import Block from '../../components/Block';
import TaskList from '../../components/TaskList';

import {QUERY_TASKS_STATUSES} from '../../graphQl';

import {$blocks} from './styles';

const  Tasks = () => {
  const {loading, error, data} = useQuery(QUERY_TASKS_STATUSES);

  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error :{error.message}</div>

  return (
    <div>
      <div style={$blocks}>
        {data.taskStatuses && data.taskStatuses.map(status => (
          <Block status={status} key={status}>
            <TaskList status={status}/>
          </Block>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
