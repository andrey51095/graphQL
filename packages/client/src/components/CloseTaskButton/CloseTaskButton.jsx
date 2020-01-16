import React from 'react';

const CloseTaskButton = (props) => {
  const {id} = props;
  return (
    <button>
      close {id}
    </button>
  )
}

export default CloseTaskButton;
