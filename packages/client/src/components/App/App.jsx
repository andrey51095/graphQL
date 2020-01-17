import React from 'react';
import { Route, Router } from 'react-router';

import Main from '../../pages/Main';
import Tasks from '../../pages/Tasks';
import TaskDescription from '../../pages/TaskDescription';

import history, {mainUrl, taskUrl, tasksUrl} from '../../routing';

const  App = () => {

  return (
    <div>
      <Router history={history}>
      <Route exact path={mainUrl} component={Main}/>
      <Route exact path={tasksUrl} component={Tasks}/>
      <Route path={taskUrl} component={TaskDescription}/>
    </Router>
    <button onClick={() => history.push(mainUrl)}>main</button>
    <button onClick={() => history.push(tasksUrl)}>tasks</button>
      </div>
  );
}

export default App;
