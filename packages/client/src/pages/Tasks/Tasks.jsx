import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Block from '../../components/Block';

import {QUERY_TASKS_STATUSES} from '../../graphQl';

import {$blocks} from './styles';

const  Tasks = () => {
  const {loading, error, data} = useQuery(QUERY_TASKS_STATUSES);

  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error :{error.message}</div>

  const statuses = data.taskStatuses
    .sort((a, b) => +a.sequence - +b.sequence)
    .map(x => x.name);
  return (
    <div style={$blocks}>
      {data.taskStatuses && statuses.map(status => (
        <Block status={status} key={status}/>
      ))}
    </div>
  );
}

export default Tasks;
