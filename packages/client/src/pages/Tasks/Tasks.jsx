import * as React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import classNames from 'classnames';

import Block from '../../components/Block';

import {QUERY_TASKS_STATUSES, CREATE_BOARD} from '../../graphQl';
import history from '../../routing';
import Style from './index.module.css';

const  Tasks = () => {
  const {loading, error, data} = useQuery(QUERY_TASKS_STATUSES);
  const [createBoard] = useMutation(CREATE_BOARD);

  if (loading) return <div>Loading ...</div>
  if (error) return <div>Error :{error.message}</div>

  const statuses = data.taskStatuses
    .sort((a, b) => +a.sequence - +b.sequence)
    .map(x => x.name);

    console.log(history);
  return (
      <div className={classNames(Style.blocks)}>
        {data.taskStatuses && statuses.map(status => (
          <Block status={status} key={status}/>
        ))}
        <button onClick={() => createBoard({variables: {name: 'TT'}})}>Create board</button>
      </div>

  );
}

export default React.memo(Tasks);
