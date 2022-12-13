import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryIndex } from '../redux/slices/filter';

const Categories = () => {
  const categories = ['Everything', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Closed'];

  const { categoryIndex } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => dispatch(setCategoryIndex(index))}
              className={categoryIndex === index ? 'active' : ''}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
