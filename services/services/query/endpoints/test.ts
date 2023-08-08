import api from "@/services/services/api";
import { TestReturn } from "@/types";


const testApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchData: builder.query<TestReturn, string>({
      query: () => ({
        url: '/gardens/',
      }),
    }),
  }),
});

export default testApi;
