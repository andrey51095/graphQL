import React from 'react'

import CloseTaskButton from '../CloseTaskButton';

const Link = ({link: {title, id}}) => {
  console.log('id: ', id);
  return (
    <div>
      <div>
        {title}
        <CloseTaskButton id={id} />
      </div>
    </div>
  );
}

export default Link