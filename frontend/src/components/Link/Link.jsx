import React from 'react'

const Link = ({link: {text, id}}) => {
  console.log('id: ', id);
  return (
    <div>
      <div>
        {text}
      </div>
    </div>
  );
}

export default Link