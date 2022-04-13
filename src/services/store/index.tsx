import React, { createContext, useContext } from 'react'
import { configure } from 'mobx'
import Destination from './Destination'
configure({
  enforceActions: 'never',
})

const StoresContext = createContext({
  destinationsStore: Destination,
})

export const StoresProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <StoresContext.Provider
      value={{
        destinationsStore: Destination,
      }}
    >
      {children}
    </StoresContext.Provider>
  )
}

export const useStores = () => useContext(StoresContext)
