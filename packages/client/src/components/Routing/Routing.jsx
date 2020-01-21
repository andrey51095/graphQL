import React from 'react';
import { Route, Router } from 'react-router';

import CreateTask from '../../pages/CreateTask';
import Layout from '../Layout';
import Main from '../../pages/Main';
import TaskDescription from '../../pages/TaskDescription';
import Tasks from '../../pages/Tasks';

import history, {mainUrl, taskUrl, tasksUrl, createTask} from '../../routing';

const Routing = () => (
  <Layout>
    <Router history={history}>
      <Route exact path={createTask} component={CreateTask}/>
      <Route exact path={mainUrl} component={Main}/>
      <Route exact path={tasksUrl} component={Tasks}/>
      <Route path={taskUrl} component={TaskDescription}/>
    </Router>
  </Layout>
);

export default Routing;
