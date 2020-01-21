import React from 'react';

const Button = ({title, clickEvent, ...rest}) => (
  <button
    onClick={clickEvent}
    {...rest}
  >
    {title}
  </button>
);

export default Button;
