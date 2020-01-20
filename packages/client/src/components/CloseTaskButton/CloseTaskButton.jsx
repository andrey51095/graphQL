import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import {DELETE_TASK_MUTATION} from '../../graphQl';

const CloseTaskButton = ({id, closeEvent}) => {
  const [task] = useMutation(DELETE_TASK_MUTATION);

  const deleteTask = () => {
    task({variables: {id}});
    closeEvent();
  };
  return (
    <button
      onClick={deleteTask}
    >
      Delete
    </button>
  )
}

export default CloseTaskButton;
