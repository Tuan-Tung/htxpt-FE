'use client';

import { PropsWithChildren, ReactElement } from "react"
import { Provider } from "react-redux"

import { store } from "@/stores/store"

const ReduxProvider = ({children}: PropsWithChildren): ReactElement => { 
  return <Provider store={store}>{children}</Provider>
 }

 export default ReduxProvider;