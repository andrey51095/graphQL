import * as React from 'react';
import classNames from 'classnames';

import {getAlias} from '../../utils';

import Style from './index.module.css';

const Text = ({text, size = 6, align = 'left'}) => (
  <div
    className={classNames(Style.container, Style[align])}
    style={{fontSize: `${6 + size * 2}px`}}
  >
    {getAlias(text)}
  </div>
);

export default React.memo(Text);
