'use client';

import { PropsWithChildren, ReactElement } from "react"
// import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux";

import { store } from "@/stores/store";

// import { store } from "@/stores/store"
const queryClient = new QueryClient();

const ReduxProvider = ({ children }: PropsWithChildren): ReactElement => {
  return <div>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
    </Provider>
  </div>
}

export default ReduxProvider;