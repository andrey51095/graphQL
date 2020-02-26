import * as React from 'react';
import classNames from 'classnames';

import history, {taskUrl} from '../../routing';

import Style from './index.module.css';

const TicketId = ({id}) => {
  const goToTicket = () => history.push(`${taskUrl}?${id}`);

  return (
    <button
      className={classNames(Style.button)}
      onClick={goToTicket}
    >
      {id}
    </button>
  );
};

export default React.memo(TicketId);
