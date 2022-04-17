import React, { createContext, useContext } from 'react'
import { configure } from 'mobx'
import Destination from './Destination'
configure({
  enforceActions: 'never',
})

const INITIAL_STATE = {
  destinationsStore: Destination,
}
const StoresContext = createContext(INITIAL_STATE)

export const StoresProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <StoresContext.Provider value={INITIAL_STATE}>
      {children}
    </StoresContext.Provider>
  )
}

export const useStores = () => useContext(StoresContext)
