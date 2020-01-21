import React from 'react';
import assign from 'lodash/assign'

import {darkBorder, $input, $select, $item} from './styles';

const Input = ({
  dispatch,
  editable = false,
  name,
  options,
  placeholder = 'input text',
  value = '',
}) => {
  const onChange = e => {
    const {name, value} = e.currentTarget;
    dispatch({[name]: value});
  };

  return (
    <div>
      {options && editable ? (
        <select
          name={name}
          onChange={onChange}
          size="1"
          style={assign({}, darkBorder, $item, $select)}
          value={value}
        >
          <option disabled>Choose {name}</option>
          {options.map(x => (<option key={x} value={x}>{x}</option>))}
        </select>
      ) : (
        <input
          autoComplete={'off'}
          disabled={!editable}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          style={assign({}, $input, darkBorder, $item)}
          type={'text'}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
