import * as React from 'react';
import {useMutation} from '@apollo/react-hooks';

import Input from '../../components/Input';
import Button from '../../components/Button';

import history, {tasksUrl} from '../../routing';

import {CREATE_TASK_MUTATION} from '../../graphQl';

import {$container} from './styles';

const CreateTask = () => {
  const [{title, description}, dispatch] = React.useReducer((state, action) => ({...state, ...action}), {});
  const [task] = useMutation(CREATE_TASK_MUTATION);
  const [redirect, setRedirect] = React.useState(false);

  const addTask = () => {
    if (title && description) {
      task({variables: {title, description, boardName: 'TT'}});
      dispatch({title: '', description: ''});
      redirect && history.push(tasksUrl);
    }
  };

  const setRedirectCheckbox = () => setRedirect(x => !x);

  return (
    <div style={$container}>
      <div>Create task</div>
      <div>
        <Input
          name={'title'}
          value={title}
          dispatch={dispatch}
          editable={true}
          placeholder="type title"
        />
        <Input
          name={'description'}
          value={description}
          dispatch={dispatch}
          editable={true}
          placeholder="type description"
        />
        <Button title={'Add new task'} clickEvent={addTask}/>
        <input type={'checkbox'} onChange={setRedirectCheckbox} /> go to tasks after save
      </div>
    </div>
  );
};

export default CreateTask;
