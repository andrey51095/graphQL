import * as React from 'react';

const TicketTitle = ({title}) => {
  return (
    <div>
      {title}
    </div>
  );
};

export default React.memo(TicketTitle);
