import * as React from 'react';
import classNames from 'classnames';

import Style from './index.module.css';

const Input = ({
  dispatch,
  name,
  placeholder = 'input text',
  value = '',
  size = 6,
}) => {
  const [error, setError] = React.useState(false);
  const onChange = e => {
    const {name, value} = e.currentTarget;
    dispatch({[name]: value});
    setError(false)
  };
  return (
    <div className={Style.container}>
      <input
        className={classNames(Style.input, {[Style.error]: error})}
        style={{fontSize: `${6 + size * 2}px`}}
        autoComplete={'off'}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={'text'}
        value={value}
      />
    </div>
  );
};

export default Input;
