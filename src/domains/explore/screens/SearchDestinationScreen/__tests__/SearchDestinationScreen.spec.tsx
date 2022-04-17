import React from 'react'
import { render, fireEvent } from '@shared/utils/test'
import SearchDestinationScreen from '../SearchDestinationScreen'

import DestinationStore from '@services/store/Destination'
import useGetRegions from '../hooks/useGetRegions'
import { ApolloError } from '@apollo/client'
import { useStores } from '@services/store'

const destinationMock = DestinationStore as jest.Mocked<typeof DestinationStore>

const statesGroupedKeys = ['California', 'Tennessee']

const statesGrouped = {
  California: [
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
  Tennessee: [
    {
      id: '0bb20925-51bc-11ea-adb3-c5da55d0cc57',
      name: 'Nashville',
      stateCode: 'TN',
      stateName: 'Tennessee',
    },
  ],
}

const regionsResponseApi = [
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
]

const mockSetSearchInput = jest.fn()

const useStoresMock = useStores as jest.MockedFunction<typeof useStores>

jest.mock('@services/store', function () {
  const actual = jest.requireActual('@services/store/Destination')
  return {
    useStores: jest.fn(() => {
      return {
        destinationsStore: {
          ...actual.default,
          destination: { id: '03', name: 'Bend', stateName: 'Oregon' },
          regions: regionsResponseApi,
          statesGroupedKeys,
          statesGrouped,
          setSearchInput: (value: string) => {
            mockSetSearchInput(value)
            actual.default.setSearchInput(value)
          },
        },
      }
    }),
  }
})

const useGetRegionsMock = useGetRegions as jest.MockedFunction<
  typeof useGetRegions
>

const mockUseGetRegionsResponse = {
  regions: regionsResponseApi,
}

const defaultValueUseGetRegions = {
  data: mockUseGetRegionsResponse,
  loading: false,
  error: false,
}

jest.mock('../hooks/useGetRegions', () =>
  jest.fn(() => ({
    data: mockUseGetRegionsResponse,
    loading: false,
    error: false,
  })),
)

type UseGetRegionsResponse = ReturnType<typeof useGetRegions>

const setup = (useGetRegionsResponse?: UseGetRegionsResponse) => {
  useGetRegionsMock.mockReturnValue({
    ...defaultValueUseGetRegions,
    ...useGetRegionsResponse,
  } as UseGetRegionsResponse)

  return {
    ...render(<SearchDestinationScreen />),
  }
}
describe('SearchDestinationScreen', () => {
  test('WHEN loading is true SHOULD render loading content', () => {
    const { queryByTestId } = setup({
      loading: true,
      error: undefined,
      data: undefined,
    })

    expect(queryByTestId('iconlogoVowel')).toBeTruthy()
  })

  test('WHEN there is error SHOULD render error content', () => {
    const { queryByText } = setup({
      data: { regions: [] },
      error: new ApolloError({ errorMessage: 'error' }),
      loading: false,
    })

    expect(queryByText('Something was wrong')).toBeTruthy()
  })

  test('WHEN there is data SHOULD render screen correctly', () => {
    const { queryByText, queryByPlaceholderText } = setup()

    expect(queryByText('Where')).toBeTruthy()
    expect(
      queryByPlaceholderText('Search by a location or home name'),
    ).toBeTruthy()
    expect(queryByText('Search')).toBeTruthy()

    statesGroupedKeys.forEach(item => {
      expect(queryByText(item)).toBeTruthy()
    })
    regionsResponseApi.forEach(item => {
      expect(queryByText(item.name)).toBeTruthy()
    })
  })

  test('WHEN there are more than 2 regions for 1 state SHOULD show select all', () => {
    const { queryByText } = setup()

    statesGroupedKeys.forEach(item => {
      expect(queryByText(item)).toBeTruthy()
    })
    regionsResponseApi.forEach(item => {
      expect(queryByText(item.name)).toBeTruthy()
    })

    expect(queryByText('Select all')).toBeTruthy()
  })

  test('WHEN type in search text SHOULD handle searchInput', async () => {
    const { findByA11yLabel } = setup()

    const searchInput = await findByA11yLabel(
      'Search by a location or home name',
    )
    const value = 'California'
    expect(searchInput).toBeTruthy()

    fireEvent.changeText(searchInput, value)

    expect(mockSetSearchInput).toHaveBeenCalledWith(value)
    expect(destinationMock.searchInput).toBe(value)
  })
})
