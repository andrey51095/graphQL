import React, {memo} from 'react';
import assign from 'lodash/assign';
import {useMutation, useQuery} from '@apollo/react-hooks';

import BlockHeader from '../BlockHeader';
import TaskList from '../../components/TaskList';

import {SET_TASK_STATUS, QUERY_TASKS_TITLE_BY_STATUS} from '../../graphQl';

import {$container} from './styles';

const Block = ({status}) => {
  const {loading, error, data = {}, refetch} = useQuery(QUERY_TASKS_TITLE_BY_STATUS, {variables: {status}, notifyOnNetworkStatusChange: true});
  const [setStatus] = useMutation(SET_TASK_STATUS);
  React.useEffect(() => {refetch()}, [refetch]);

  if (error) return <div>Error :{error.message}</div>

  const refetchTasks = () => refetch();

  const drop = event => {
    event.preventDefault();
    const id = event.dataTransfer.getData('task-id');
    const draggedStatus = event.dataTransfer.getData('task-status');

    if(draggedStatus !== status) {
      setStatus({variables: {id, status}});
      refetchTasks();
    }
  };

  const dragOver = event => {
    event.preventDefault();
  }

  return (
    <div
      onDragOver={dragOver}
      onDrop={drop}
      style={assign({}, $container)}
    >
      <BlockHeader title={status}/>
      <TaskList
        loading={loading}
        refetch={refetchTasks}
        status={status}
        tasks={data.tasksByStatus}
      />
    </div>
  );
};

export default memo((props) => {

  return <Block {...props}/>
}, (...rest) => {console.log(rest)});
