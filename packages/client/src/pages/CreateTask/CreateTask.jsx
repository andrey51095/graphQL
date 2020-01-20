import React from 'react';
import {useMutation} from '@apollo/react-hooks';

import Input from '../../components/Input';

import {CREATE_TASK_MUTATION} from '../../graphQl';
import history, {tasksUrl} from '../../routing';

import {$container} from './styles';

const CreateTask = () => {
  const [{title, description}, dispatch] = React.useReducer((state, {name, value}) => ({...state, [name]: value}), {});
  const [task] = useMutation(CREATE_TASK_MUTATION);
  const [redirect, setRedirect] = React.useState(false);

  const addTask = () => {
    if (title && description) {
      task({variables: {title, description}});
      dispatch({name: 'title', value: ''});
      dispatch({name: 'description', value: ''});
      redirect && history.push(tasksUrl);
    }
  };

  const setRedirectCheckbox = () => {
    setRedirect(x => !x);
  }

  return (
    <div style={$container}>
      <div>Create task</div>
      <div>
        <Input
          name={'title'}
          value={title}
          dispatch={dispatch}
          editable={true}
          placeholder="A title for the task"
        />
        <Input
          name={'description'}
          value={description}
          dispatch={dispatch}
          editable={true}
          placeholder="A description for the task"
        />
        <button onClick={addTask}>Add new task</button>
        <input type={'checkbox'} onChange={setRedirectCheckbox} /> go to tasks after save
      </div>
    </div>
  );
};

export default CreateTask;
