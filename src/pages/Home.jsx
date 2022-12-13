import React, { useState, useEffect, useContext } from 'react';

import { searchContext } from '../App';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzaSkeleton from '../components/pizzaBlock/pizzaSkeleton';
import Pagination from '../components/Pagination';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { searchValue } = useContext(searchContext);

  const [items, setItems] = React.useState([]);
  const [pizzaLoadingStatus, setPizzaLoadingStatus] = useState(true);

  const [sortProperty, setSortProperty] = useState({ name: 'Popular ASC', value: 'rating' });
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    //const categoryQuery = categoryIndex ? `category=${categoryIndex}` : '';
    const sortQuery =
      '&sortBy=' +
      sortProperty.value.replace('-', '') +
      (sortProperty.value.includes('-') ? '&order=desc' : '');
    const searchQuery = '&search=' + searchValue;
    const pageQuerry = '&page=' + currentPage + '&limit=4';

    setPizzaLoadingStatus(true);
    fetch(
      'https://6397450186d04c7633906af2.mockapi.io/items?' + pageQuerry + sortQuery + searchQuery,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setPizzaLoadingStatus(false);
      });
  }, [categoryIndex, sortProperty, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} />
        <Sort sortProperty={sortProperty} setSortProperty={setSortProperty} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {(pizzaLoadingStatus &&
          [...new Array(6)].map((_, id) => {
            return (
              <div key={id} className="pizza-block__wrapper">
                <PizzaSkeleton />
              </div>
            );
          })) ||
          items.map((value) => {
            return <PizzaBlock key={value.id} {...value} />;
          })}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
