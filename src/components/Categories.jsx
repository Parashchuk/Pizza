import React from 'react';

const Categories = ({ categoryIndex, setCategoryIndex }) => {
  const categories = ['Everything', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => setCategoryIndex(index)}
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
