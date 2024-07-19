import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

type CommonState = {
  isSideBarDisplay: boolean;
};

const initialState: CommonState = {
  isSideBarDisplay: false,
};

const setIsSideBarDisplay: CaseReducer<CommonState, PayloadAction<boolean>> = (state, action) => {
  if (action.payload) {
    state.isSideBarDisplay = action.payload;
  } else {
    state.isSideBarDisplay = !state.isSideBarDisplay;
  }
};

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: { setIsSideBarDisplay },
});

export const commonActions = commonSlice.actions;

export default commonSlice.reducer;
