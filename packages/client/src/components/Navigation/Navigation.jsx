import React from 'react';

import Button from '../Button';
import history, {mainUrl, createTask, tasksUrl} from '../../routing';

import {$container, $title, $navigation} from './styles';

const Navigation = () => {
  const goToPage = e => history.push(e.currentTarget.name);
  return (
    <div style={$container}>
      <div style={$title}>Navigation</div>
      <div style={$navigation}>
        <Button title={'Main'} name={mainUrl} clickEvent={goToPage}/>
        <Button title={'Tasks'} name={tasksUrl} clickEvent={goToPage}/>
        <Button title={'Create task'} name={createTask} clickEvent={goToPage}/>
      </div>
    </div>
  );
};

export default Navigation;
