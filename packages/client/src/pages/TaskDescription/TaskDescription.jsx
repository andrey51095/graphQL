import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import pick from 'lodash/pick';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {QUERY_TASK, UPDATE_TASK_MUTATION, QUERY_TASKS_STATUSES} from '../../graphQl';

import history from '../../routing';

const TaskDescription = () => {
  const [{title, description, status, createdAt, updatedAt}, dispatch] = React.useReducer((state, {name, value}) => ({
    ...state,
    [name]: value,
  }), {});
  const [editable, setEditable] = React.useState(false);

  const statuses = useQuery(QUERY_TASKS_STATUSES);

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

  if (loading || statuses.loading) {return (<div>Loading ...</div>)}
  if (error || statuses.error) {return (<div>Error!</div>)}

  const saveTask = () => {
    updateTask({variables: {id: history.location.search.slice(1), status, description, title}});
    setEditable(false);
  }

  const cancelSave = () => {
    setEditable(false);
  }

  const editTask = () => {
    setEditable(true);
  }

  return (
    <div>
      TaskDescription
      <div>
        <Input
          value={title}
          name={'title'}
          dispatch={dispatch}
          editable={editable}
        />
        <Input
          value={description}
          name={'description'}
          dispatch={dispatch}
          editable={editable}
        />
        <Input
          value={status}
          name={'status'}
          dispatch={dispatch}
          editable={editable}
        />
        <Input value={createdAt} />
        <Input value={updatedAt} />
      </div>
      {editable
        ? <>
            <Button title={'Save'} clickEvent={saveTask}/>
            <Button title={'Cancel'} clickEvent={cancelSave}/>
          </>
        :<Button title={'Edit'} clickEvent={editTask}/>}
    </div>
  );
};

export default TaskDescription;
