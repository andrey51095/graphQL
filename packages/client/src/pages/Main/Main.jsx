import React from 'react';

import history, {tasksUrl} from '../../routing';

const Main = () => {
  console.log('history: ', history);
  const goToTasks = () => {
    history.push(tasksUrl);
  }
  return (
    <div>
      main
      <button onClick={goToTasks}>go to tasks</button>
    </div>
  );
};

export default Main;
