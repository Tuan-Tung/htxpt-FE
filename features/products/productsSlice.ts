import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TBonsai, TFruit } from '@/types';

type ProductsState = {
  fruits: Array<TFruit>;
  bonsai: Array<TBonsai>;
};

const initialState: ProductsState = {
  fruits: [],
  bonsai: [],
};

const setFruits: CaseReducer<ProductsState, PayloadAction<Array<TFruit>>> = (state, action) => {
  state.fruits = action.payload;
};

const setBonsai: CaseReducer<ProductsState, PayloadAction<Array<TBonsai>>> = (state, action) => {
  state.bonsai = action.payload;
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: { setFruits, setBonsai },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
