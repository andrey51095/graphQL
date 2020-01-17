import React from 'react';
import assign from 'lodash/assign'

import {NONE_EDITABLE} from '../../constants';

import {redBorder, darkBorder, input} from './styles';

const Input = ({
  dispatch,
  name,
  value,
  placeholder = 'input text',
  editable = false,
  warning = false,
}) => {
  const [border, setBorder] = React.useState(darkBorder);
  React.useEffect(() => {
    if(warning) {
      setBorder(redBorder);
    } else {
      setBorder(darkBorder);
    }
    setBorder();
  }, [warning]);
  const onChange = e => {
    if (editable) {
      const {name, value} = e.currentTarget;
      !NONE_EDITABLE.includes(name) && dispatch({name, value});
    }
  };

  return (
    <div>
      <input
        style={assign(input, border)}
        type={'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>

  );
};

export default Input;
