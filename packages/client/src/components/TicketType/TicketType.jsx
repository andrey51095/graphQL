import * as React from 'react';

const TicketType = ({type = 'task'}) => {
  return (
    <div>
      {type}
    </div>
  );
};

export default React.memo(TicketType);
