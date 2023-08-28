import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TGardener } from '@/types';

type GardenerState = {
  gardeners: Array<TGardener>;
};

const initialState: GardenerState = {
  gardeners: [],
};

const setGardeners: CaseReducer<GardenerState, PayloadAction<Array<TGardener>>> = (
  state,
  action
) => {
  state.gardeners = action.payload;
};

const gardenerSlice = createSlice({
  name: 'gardenerSlice',
  initialState,
  reducers: { setGardeners },
});

export const gardenerActions = gardenerSlice.actions;

export default gardenerSlice.reducer;
