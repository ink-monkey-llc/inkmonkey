'use client'

import { Provider, createStore } from 'jotai'
import { DevTools } from 'jotai-devtools'
import 'jotai-devtools/styles.css'

export const FonzProvider = ({ children }: { children: React.ReactNode }) => {
 const store = createStore()
 return (
  <Provider store={store}>
   <DevTools store={store} />
   {children}
  </Provider>
 )
}
