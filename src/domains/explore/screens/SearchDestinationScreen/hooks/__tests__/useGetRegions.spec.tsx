import React from 'react'
import { renderHook } from '@testing-library/react-hooks/native'
import { MockedProvider } from '@apollo/client/testing'

import useGetRegions from '../useGetRegions'
import { GET_REGIONS } from '@services/api/graphql/queries/Destination'
import { ApolloError } from '@apollo/client'

describe('useGetRegions', () => {
  it('SHOULD render without error', async () => {
    const mocks = [
      {
        request: {
          query: GET_REGIONS,
        },
        result: {
          data: {
            regions: [
              {
                id: '0bb20925-51bc-11ea-adb3-c5da55d0cc57',
                name: 'Nashville',
                stateCode: 'TN',
                stateName: 'Tennessee',
              },
              {
                id: '24c6f668-fa74-11e9-aa26-3fdfc21757cb',
                name: 'Sonoma',
                stateCode: 'CA',
                stateName: 'California',
              },
              {
                id: '42b72ed3-4f50-11e9-afc4-934d893b8b54',
                name: 'Malibu',
                stateCode: 'CA',
                stateName: 'California',
              },
              {
                id: '42b755e6-4f50-11e9-afc4-cfeda9af0fec',
                name: 'Coachella Valley',
                stateCode: 'CA',
                stateName: 'California',
              },
            ],
          },
        },
      },
    ]
    const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    )

    const { result, waitForValueToChange } = renderHook(() => useGetRegions(), {
      wrapper,
    })

    expect(result.current.loading).toBe(true)
    await waitForValueToChange(() => result.current.data)

    expect(result.current.data?.regions.length).toBe(4)
  })

  it('SHOULD render error ', async () => {
    const mocks = [
      {
        request: {
          query: GET_REGIONS,
        },
        error: new Error('An error occurred'),
      },
    ]

    const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    )

    const { result, waitForValueToChange } = renderHook(() => useGetRegions(), {
      wrapper,
    })

    expect(result.current.loading).toBe(true)
    await waitForValueToChange(() => result.current.error)

    expect(result.current.error).toBeTruthy()
    expect(result.current.error).toEqual(
      new ApolloError({
        errorMessage: 'An error occurred',
      }),
    )
    expect(result.current.data).toBeUndefined()
  })
})
