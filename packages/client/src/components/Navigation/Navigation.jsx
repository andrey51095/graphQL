import * as React from 'react';

import Button from '../Button';
import history, {mainUrl, createTask, tasksUrl} from '../../routing';

import Style from './index.module.css';

const Navigation = () => {
  const goToPage = e => history.push(e.currentTarget.name);
  return (
    <div className={Style.container}>
      <Button title={'Navigation'} name={mainUrl} tagged={true} size={'large'} clickEvent={goToPage}/>
      <div className={Style.navigation}>
        <Button title={'Tasks'} name={tasksUrl} size={'medium'} clickEvent={goToPage}/>
        <Button title={'Create task'} name={createTask} size={'medium'} clickEvent={goToPage}/>
      </div>
    </div>
  );
};

export default React.memo(Navigation);
