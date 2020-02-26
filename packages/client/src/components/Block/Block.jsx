import React, {memo} from 'react';
import {useMutation, useQuery} from '@apollo/react-hooks';
import classNames from 'classnames';

import TaskList from '../../components/TaskList';
import TextArea from '../../components/TextArea';

import {SET_TASK_STATUS, QUERY_TASKS_TITLE_BY_STATUS} from '../../graphQl';

import Style from './index.module.css';

const Block = ({status}) => {
  const {loading, error, data = {}, refetch} = useQuery(QUERY_TASKS_TITLE_BY_STATUS, {variables: {status}, notifyOnNetworkStatusChange: true});
  const [setStatus] = useMutation(SET_TASK_STATUS);
  React.useEffect(() => refetch(), [refetch]);
  if (error) return <div>Error :{error.message}</div>

  const refetchTasks = () => refetch();

  // const drop = event => {
  //   event.preventDefault();
  //   const id = event.dataTransfer.getData('task-id');
  //   const draggedStatus = event.dataTransfer.getData('task-status');

  //   if(draggedStatus !== status) {
  //     setStatus({variables: {id, status}});
  //     refetchTasks();
  //   }
  // };

  // const dragOver = event => {
  //   event.preventDefault();
  // }

  return (
    <div
      className={classNames(Style.container)}
      // onDragOver={dragOver}
      // onDrop={drop}
    >
      <TextArea value={status}/>
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
