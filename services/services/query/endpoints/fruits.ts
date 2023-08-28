import api from '@/services/services/api';
import { FruitsArg, FruitsReturn } from '@/types/api';

const fruitsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFruits: builder.query<FruitsReturn, FruitsArg>({
      query: () => ({
        url: '/fruit/',
      }),
    }),
  }),
});

export const { useGetFruitsQuery, useLazyGetFruitsQuery } = fruitsApi;
