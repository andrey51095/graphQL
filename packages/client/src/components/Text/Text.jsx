import React from 'react';
import classNames from 'classnames';

import Style from './index.module.css';

const Text = ({text, size = 6}) => (
  <div
    className={classNames(Style.container)}
    style={{fontSize: `${6 + size * 2}px`}}
  >
    {text}
  </div>
);

export default React.memo(Text);
