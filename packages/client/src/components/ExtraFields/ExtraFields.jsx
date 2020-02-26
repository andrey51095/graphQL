import * as React from 'react';

const ExtraFields = ({active = false}) => {
  return active && (
    <div>
      {'Extra field'}
    </div>
  );
};

export default React.memo(ExtraFields);
