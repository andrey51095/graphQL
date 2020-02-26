import * as React from 'react';
import classNames from 'classnames';

import ExtraFields from '../ExtraFields';
import TicketType from '../TicketType';
import TicketPriority from '../TicketPriority';
import TicketId from '../TicketId';
import TicketTitle from '../TicketTitle';
import UserPhoto from '../UserPhoto';

import Style from './index.module.css';

const Ticket = ({id, title, status, refetch}) => {

  return (
    <div
      className={classNames(Style.container, {[Style.isDragging]: false})}
    >
      <div className={classNames(Style.status)}>
        <TicketType />
        <TicketPriority />
      </div>
      <div className={classNames(Style.content)}>
        <div className={classNames(Style.mainContent)}>
          <div className={classNames(Style.description)}>
            <TicketId id={id}/>
            <TicketTitle title={title}/>
          </div>
          <UserPhoto/>
        </div>
        <ExtraFields />
      </div>
    </div>
  );
};

export default React.memo(Ticket);
