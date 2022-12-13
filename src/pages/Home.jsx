import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { searchContext } from '../App';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import PizzaSkeleton from '../components/pizzaBlock/pizzaSkeleton';
import Pagination from '../components/Pagination';

const Home = () => {
  //Filter properties for request
  const { currentPage, sortProperty, categoryIndex } = useSelector((store) => store.filter);

  //Search value For Input
  const { searchValue } = useContext(searchContext);

  //Render Pizza Items
  const [items, setItems] = React.useState([]);
  const [pizzaLoadingStatus, setPizzaLoadingStatus] = useState(true);

  useEffect(() => {
    const categoryQuery = categoryIndex ? `category=${categoryIndex}` : '';
    const sortQuery =
      '&sortBy=' +
      sortProperty.value.replace('-', '') +
      (sortProperty.value.includes('-') ? '&order=desc' : '');
    const searchQuery = searchValue ? '&search=' + searchValue : '';
    const pageQuerry = '&page=' + currentPage + '&limit=4';

    setPizzaLoadingStatus(true);
    axios
      .get(
        'https://6397450186d04c7633906af2.mockapi.io/items?' +
          categoryQuery +
          pageQuerry +
          sortQuery +
          searchQuery,
      )
      .then((res) => {
        setItems(res.data);
        setPizzaLoadingStatus(false);
      });
  }, [categoryIndex, sortProperty, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {(pizzaLoadingStatus &&
          [...new Array(4)].map((_, id) => {
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
      <Pagination />
    </>
  );
};

export default Home;
