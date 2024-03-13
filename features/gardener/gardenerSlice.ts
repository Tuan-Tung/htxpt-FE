import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TGardener } from '@/types';

type GardenerState = {
  gardeners: Array<TGardener> | any;
  fruits: Array<any>;
  trees: Array<any>;
};

const initialState: GardenerState = {
  gardeners: [],
  fruits: [],
  trees: [],

};

const setGardeners: CaseReducer<GardenerState, PayloadAction<Array<TGardener>>> = (
  state,
  action
) => {
  state.gardeners = action.payload;
};
const setFruits: CaseReducer<GardenerState, PayloadAction<Array<any>>> = (
  state,
  action
) => {
  state.fruits = action.payload;
};
const setTrees: CaseReducer<GardenerState, PayloadAction<Array<any>>> = (
  state,
  action
) => {
  state.trees = action.payload;
};

const gardenerSlice = createSlice({
  name: 'gardenerSlice',
  initialState,
  reducers: { setGardeners,setFruits,setTrees },
});

export const gardenerActions = gardenerSlice.actions;

export default gardenerSlice.reducer;
