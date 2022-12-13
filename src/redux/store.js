import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filter';

const store = configureStore({
  reducer: {
    filter,
  },
});

export default store;
