import React from 'react';

import style from './not-found.module.scss';

const NotFoundBlock = () => {
  return (
    <>
      <div className={style.root}>
        <p>😕</p>
        The page is not Exist
      </div>
    </>
  );
};

export default NotFoundBlock;
