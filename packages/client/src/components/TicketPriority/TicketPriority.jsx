import * as React from 'react';
import classNames from 'classnames';

import Style from './index.module.css';

const TicketPriority = ({priority = 'medium'}) => (
  <div
    className={classNames(Style.status, Style[priority])}
  />
);

export default TicketPriority;
