import * as React from 'react';
import classNames from 'classnames';

import Style from './index.module.css';

const Button = ({
  title,
  clickEvent,
  size = 'small',
  tagged = false,
  ...rest
}) => (
  <button
    className={classNames(Style.button, Style[size], {[Style.tagged]: tagged})}
    onClick={clickEvent}
    {...rest}
  >
    {title}
  </button>
);

export default React.memo(Button);
