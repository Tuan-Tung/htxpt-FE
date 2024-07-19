import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useDispatchBase, useSelector as useSelectorBase } from 'react-redux';
import { combineReducers } from 'redux';

import commonReducer from '@/features/common/commonSlice';
import gardenerReducer from '@/features/gardener/gardenerSlice';
import productReducer from '@/features/products/productsSlice';

const rootReducers = combineReducers({
  common: commonReducer,
  gardener: gardenerReducer,
  product: productReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <T = unknown>(selector: (state: RootState) => T): T =>
  useSelectorBase<RootState, T>(selector);
