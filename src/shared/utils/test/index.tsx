import React, { FC, PropsWithChildren, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import { StoresProvider } from '@services/store'

const AllTheProviders: FC = ({ children }: PropsWithChildren<unknown>) => {
  return <StoresProvider>{children}</StoresProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
