import React from 'react';
import { Route, Router } from 'react-router';

import Main from '../../pages/Main';
import Tasks from '../../pages/Tasks';
import TaskDescription from '../../pages/TaskDescription';
import CreateTask from '../../pages/CreateTask';

import history, {mainUrl, taskUrl, tasksUrl, createTask} from '../../routing';
import Layout from '../Layout';

const Routing = () => {

  return (
    <Layout>
      <Router history={history}>
        <Route exact path={mainUrl} component={Main}/>
        <Route exact path={tasksUrl} component={Tasks}/>
        <Route path={taskUrl} component={TaskDescription}/>
        <Route exact path={createTask} component={CreateTask}/>
      </Router>
    </Layout>
  );
}

export default Routing;
