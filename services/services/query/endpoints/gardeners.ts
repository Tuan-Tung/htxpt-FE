import api from '@/services/services/api';
import { GardenersArgs, GardenersReturn } from '@/types/api';

const gardenersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGardens: builder.query<GardenersReturn, GardenersArgs>({
      query: () => ({
        url: '/gardeners/',
      }),
    }),
  }),
});

export const { useGetGardensQuery, useLazyGetGardensQuery } = gardenersApi;
