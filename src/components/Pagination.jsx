import React from 'react';

import styles from '../scss/components/pagination.module.scss';

const Pagination = ({ currentPage, setCurrentPage }) => {
  const countOfElements = 10;
  const countOfElementsOnPage = 4;

  let pagination = [...new Array(Math.ceil(countOfElements / countOfElementsOnPage))];

  const nexPage = () => (currentPage < pagination.length ? setCurrentPage(currentPage + 1) : null);

  const previousPage = () => (currentPage > 1 ? setCurrentPage(currentPage - 1) : null);

  return (
    <div className={styles.root}>
      <ul>
        <li onClick={() => previousPage()}>{'<'}</li>
        {pagination.map((_, id) => {
          return (
            <li
              className={currentPage - 1 == id ? `${styles.active}` : ''}
              onClick={() => setCurrentPage(id)}
              key={id}>
              {id + 1}
            </li>
          );
        })}
        <li onClick={() => nexPage()}>{'>'}</li>
      </ul>
    </div>
  );
};

export default Pagination;
