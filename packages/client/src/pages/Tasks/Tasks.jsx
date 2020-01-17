import React from 'react';

import { useMutation, useQuery } from '@apollo/react-hooks';

import Block from '../../components/Block';
import TaskList from '../../components/TaskList';

import {CREATE_TASK_MUTATION, QUERY_TASKS_STATUSES} from '../../graphQl';
import Input from '../../components/Input';

import {$blocks} from './styles';

const  Tasks = () => {
  const [{title, description}, dispatch] = React.useReducer((state, {name, value}) => ({...state, [name]: value}), {});
  const [task] = useMutation(CREATE_TASK_MUTATION);
  const {loading, error, data = {}} = useQuery(QUERY_TASKS_STATUSES);
  console.log('data: ', data);

  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error :{error.message}</div>

  const addTask = () => {
    if (title) {
      task({variables: {title, description: description || 'n/a'}});
      dispatch({name: 'title', value: ''});
      dispatch({name: 'description', value: ''});
    }
  };
  return (
    <div>
      <Input
        name={'title'}
        value={title}
        dispatch={dispatch}
        editable={true}
        placeholder="A title for the link"
      />
      <Input
        name={'description'}
        value={description}
        dispatch={dispatch}
        editable={true}
        placeholder="A description for the link"
      />
      <button onClick={addTask}>Add new task</button>
      <div style={$blocks}>
        {data.taskStatuses.map(status => (
          <Block status={status} key={status}>
            <TaskList status={status}/>
          </Block>
        ))}
      </div>

    </div>
  );
}

export default Tasks;
