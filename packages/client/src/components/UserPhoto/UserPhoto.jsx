import * as React from 'react';
import classNames from 'classnames';

import noUserImage from './no-user-img.png';
import Style from './index.module.css';

const UserPhoto = ({id, size = 'small'}) => {
  return id ? (
    <div>
      {id}
    </div>
  ) : (
    <img className={classNames(Style.userPhoto, Style[size])} alt={'no img'} src={noUserImage} />
  );
};

export default React.memo(UserPhoto);
