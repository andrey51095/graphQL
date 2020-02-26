import * as React from 'react';

import Text from '../Text';
import Input from '../Input';

const TextArea = ({editable, value, ...rest}) => {

  return editable ? (
    <Input
      editable={editable}
      value={value}
      {...rest}
    />
  ) : (
    <Text
      text={value}
      {...rest}
    />
  );
}

export default React.memo(TextArea);
