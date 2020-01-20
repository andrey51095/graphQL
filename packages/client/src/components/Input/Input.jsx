import React from 'react';
import assign from 'lodash/assign'

import {darkBorder, $input, $select, $item} from './styles';

const Input = ({
  dispatch,
  name,
  value = '',
  placeholder = 'input text',
  editable = false,
  options,
}) => {
  const onChange = e => {
    const {name, value} = e.currentTarget;
    dispatch({name, value});
  };

  return (
    <div>
      {options && editable ? (
        <select
          style={assign({}, darkBorder, $item, $select)}
          size="1"
          name={name}
          value={value}
          onChange={onChange}
        >
          <option disabled>Choose {name}</option>
          {options.map(x => (<option key={x} value={x}>{x}</option>))}
        </select>
      ) : (
        <input
          disabled={!editable}
          autoComplete={'off'}
          style={assign({}, $input, darkBorder, $item)}
          type={'text'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
