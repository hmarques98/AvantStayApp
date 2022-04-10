import React, { createContext, useContext } from 'react'

import Destination from './Destination'

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
