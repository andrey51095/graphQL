import * as React from 'react';
import classNames from 'classnames';

import TextArea from '../TextArea';

import Style from './index.module.css';

const TaggedTextArea = ({name, ...rest}) => {

  return (
    <div className={classNames(Style.container)}>
      <TextArea
        value={name}
      />
      <TextArea
        name={name}
        {...rest}
      />
    </div>
  );

};

export default React.memo(TaggedTextArea);
