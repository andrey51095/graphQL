import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import {DELETE_TASK_MUTATION} from '../../graphQl';

const CloseTaskButton = ({id}) => {
  const [task] = useMutation(DELETE_TASK_MUTATION);
  const [clicked, setClicked] = React.useState(false);

  const deleteTask = () => {
    task({variables: {id}});
    setClicked(true);
  };
  return (
    <button
      onClick={deleteTask}
      disabled={clicked}
    >
      delete
    </button>
  )
}

export default CloseTaskButton;
