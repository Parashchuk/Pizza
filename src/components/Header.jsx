import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../assets/img/cart.svg';
import logo from '../assets/img/pizza-logo.svg';
import search from '../assets/img/search.svg';
import close from '../assets/img/close.svg';

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>the most delicious pizza in the universe</p>
            </div>
          </div>
        </Link>
        <div className="header__input-field">
          <img src={search} alt="search" />
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Search your pizza ..."
          />
          <img src={close} alt="close" />
        </div>
        <div className="header__cart">
          <a href="/cart.html" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img src={cart} alt="cart" />
            <span>3</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;