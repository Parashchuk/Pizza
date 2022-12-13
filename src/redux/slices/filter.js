import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  sortProperty: { name: 'Popular ASC', value: 'rating' },
  categoryIndex: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload;
    },
    setSortProperty(state, action) {
      state.sortProperty = action.payload;
    },
  },
});

export const { setCurrentPage, setCategoryIndex, setSortProperty } = filterSlice.actions;

export default filterSlice.reducer;
