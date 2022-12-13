import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import './scss/app.scss';

export const searchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </searchContext.Provider>
  );
};

export default App;
