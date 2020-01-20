import React from 'react';

import history, {mainUrl, createTask, tasksUrl} from '../../routing';

import {$container, $title, $navigation} from './styles';

const Navigation = () => {

  const goToPage = e => {
    history.push(e.currentTarget.name);
  }
  return (
    <div style={$container}>
      <div style={$title}>Navigation</div>
      <div style={$navigation}>
        <button onClick={goToPage} name={mainUrl}>main</button>
        <button onClick={goToPage} name={tasksUrl}>tasks</button>
        <button onClick={goToPage} name={createTask}>create task</button>
      </div>
    </div>
  );
};

export default Navigation;
