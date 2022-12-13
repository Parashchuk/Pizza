import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSortProperty } from '../redux/slices/filter';
import arrowDown from '../assets/img/arrow-down.svg';

const Sort = () => {
  const sortList = [
    { name: 'Popular ASC', value: 'rating' },
    { name: 'Popular DESC', value: '-rating' },
    { name: 'price ASC', value: 'price' },
    { name: 'price DESC', value: '-price' },
    { name: 'A-Z', value: 'title' },
    { name: 'Z-A', value: '-title' },
  ];

  //Status popup Sort
  const [popupVisible, setPopupVisible] = React.useState(false);
  const togglePopupVisigle = () => setPopupVisible(!popupVisible);

  //Get and set filter value
  const { sortProperty } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  //Change sort and hide popup
  const changeActiveSort = (obj) => {
    dispatch(setSortProperty(obj));
    togglePopupVisigle();
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrowDown} alt="arrow-down" />
        <b>Sort by:</b>
        <span onClick={togglePopupVisigle}>{sortProperty.name}</span>
      </div>
      {popupVisible && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => {
              return (
                <li key={i} onClick={() => changeActiveSort(obj)}>
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
