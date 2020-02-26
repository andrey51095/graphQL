import * as React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import pick from 'lodash/pick';
import classNames from 'classnames';

import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import TaggedTextArea from '../../components/TaggedTextArea';

import {QUERY_TASK, UPDATE_TASK_MUTATION, QUERY_TASKS_STATUSES} from '../../graphQl';

import history from '../../routing';

import Style from './index.module.css';

const TaskDescription = () => {
  const [{title, description, status, createdAt, updatedAt}, dispatch] = React.useReducer((state, action) => ({
    ...state,
    ...action,
  }), {});
  const [editable, setEditable] = React.useState(false);

  const statuses = useQuery(QUERY_TASKS_STATUSES);

  const {loading, error, data = {}, refetch} = useQuery(
    QUERY_TASK,
    {
      variables: {id: history.location.search.slice(1)},
    }
    );
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION, {onCompleted: () => refetch()});

  React.useEffect(() => {
    Object.entries(pick(data.task, ['title', 'description', 'createdAt', 'updatedAt', 'status']) || {}).forEach(([name, value]) => dispatch({[name]: value}))
  }, [data]);

  if (loading || statuses.loading) {return (<div>Loading ...</div>)}
  if (error || statuses.error) {return (<div>Error!</div>)}

  const refetchTask = () => {
    updateTask({variables: {id: history.location.search.slice(1), status, description, title}});
    setEditable(false);
  }

  const editTask = () => {
    setEditable(true);
  }

  return (
    <div className={classNames(Style.container)}>
      <TextArea
        value={'Task Description'}
        align={'center'}
        size={10}
      />
      <div
        className={classNames(Style.info)}
      >
        <TaggedTextArea
          value={title}
          name={'title'}
          dispatch={dispatch}
          editable={editable}
        />
        <TaggedTextArea
          value={description}
          name={'description'}
          dispatch={dispatch}
          editable={editable}
        />
        <TaggedTextArea
          value={status}
          name={'status'}
          dispatch={dispatch}
          editable={editable}
        />
        <TaggedTextArea value={createdAt} name={'createdAt'} />
        <TaggedTextArea value={updatedAt} name={'updatedAt'}/>
      </div>
      <div className={classNames(Style.buttons)}>
        {editable
          ? <>
              <Button title={'Save'} clickEvent={refetchTask} size={'medium'}/>
              <Button title={'Cancel'} clickEvent={refetchTask} size={'medium'}/>
            </>
          :<Button title={'Edit'} clickEvent={editTask} size={'medium'}/>}
      </div>
    </div>
  );
};

export default TaskDescription;
