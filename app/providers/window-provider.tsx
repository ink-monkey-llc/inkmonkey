'use client'

import { Provider } from 'jotai'

export const WindowProvider = ({ children }: { children: React.ReactNode }) => {
 return <Provider>{children}</Provider>
}
