import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage } from '../redux/slices/filter';
import styles from '../scss/components/pagination.module.scss';

const Pagination = () => {
  const countOfElements = 10;
  const countOfElementsOnPage = 4;

  const { currentPage } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  let pagination = [...new Array(Math.ceil(countOfElements / countOfElementsOnPage))];

  const nexPage = () =>
    currentPage < pagination.length ? dispatch(setCurrentPage(currentPage + 1)) : null;

  const previousPage = () => (currentPage > 1 ? dispatch(setCurrentPage(currentPage - 1)) : null);

  return (
    <div className={styles.root}>
      <ul>
        <li onClick={() => previousPage()}>{'<'}</li>
        {pagination.map((_, id) => {
          id += 1;
          return (
            <li
              className={currentPage === id ? `${styles.active}` : ''}
              onClick={() => dispatch(setCurrentPage(id))}
              key={id}>
              {id}
            </li>
          );
        })}
        <li onClick={() => nexPage()}>{'>'}</li>
      </ul>
    </div>
  );
};

export default Pagination;
