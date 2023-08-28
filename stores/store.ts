import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useDispatchBase, useSelector as useSelectorBase } from 'react-redux';
import { combineReducers } from 'redux';

import gardenerReducer from '@/features/gardener/gardenerSlice';
import productReducer from '@/features/products/productsSlice';
import api from '@/services/services/api';

const rootReducers = combineReducers({
  [api.reducerPath]: api.reducer,
  gardener: gardenerReducer,
  product: productReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <T = unknown>(selector: (state: RootState) => T): T =>
  useSelectorBase<RootState, T>(selector);
