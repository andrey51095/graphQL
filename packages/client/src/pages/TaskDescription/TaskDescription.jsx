import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import pick from 'lodash/pick';

import Input from '../../components/Input';

import {QUERY_TASK, UPDATE_TASK_MUTATION} from '../../graphQl';

import history from '../../routing';

const TaskDescription = () => {
  const [task, dispatch] = React.useReducer((state, {name, value}) => ({
    ...state,
    [name]: value,
  }), {});
  const [editable, setEditable] = React.useState(false);

  const {loading, error, data = {}, refetch} = useQuery(
    QUERY_TASK,
    {
      variables: {id: history.location.search.slice(1)},
    }
    );
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION, {onCompleted: () => refetch()});

  React.useEffect(() => {
    Object.entries(pick(data.task, ['title', 'description', 'createdAt', 'updatedAt', 'status']) || {}).forEach(([name, value]) => dispatch({name, value}))
  }, [data]);

  if (loading) {
    return (<div>Loading ...</div>)
  }

  if (error) {
    return (<div>Error!</div>)
  }

  const saveTask = () => {
    console.log('task: ', task);
    const {status, description, title} = task;
    updateTask({variables: {id: history.location.search.slice(1), status, description, title}});
    setEditable(false);
  }
  return (
    <div>
      TaskDescription
      <div>
        {Object.entries(task).map(([name, value]) => (
          <Input
            editable={editable}
            key={name}
            name={name}
            value={value}
            dispatch={dispatch}
          />
        ))}
      </div>
      {editable ? <button onClick={saveTask}>Save</button> : <button onClick={() => setEditable(true)}>Edit</button>}
    </div>
  );
};

export default TaskDescription;
