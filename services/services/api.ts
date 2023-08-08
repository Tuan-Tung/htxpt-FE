import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:3000/',
});

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
});

export default api;
