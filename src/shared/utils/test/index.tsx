import React, { PropsWithChildren, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import Destination from '@services/store/Destination'

const StoresContext = React.createContext({})

const AllTheProviders = ({ children }: PropsWithChildren<unknown>) => {
  const INITIAL_STATE = {
    destinationStore: Destination,
  }
  return (
    <StoresContext.Provider value={INITIAL_STATE}>
      {children}
    </StoresContext.Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
