import React from 'react'
import { render, fireEvent, waitFor } from '@shared/utils/test'
import { useNavigation } from '@react-navigation/native'
import { ApolloError } from '@apollo/client'

import DestinationStore, {
  INITIAL_STATE_REGION_DESTINATION,
} from '@services/store/Destination'
import { useStores } from '@services/store'

import useGetRegions from '../hooks/useGetRegions'
import SearchDestinationScreen from '../SearchDestinationScreen'

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
        destinationStore: {
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

type UseGetRegionsMockType = ReturnType<typeof useGetRegions>
type UseStoresMockType = ReturnType<typeof useStores>
type DestinationStoreType = typeof DestinationStore

const setup = (
  useGetRegionsMockResponse?: Partial<UseGetRegionsMockType>,
  useStoresMockResponse?: Partial<UseStoresMockType>,
) => {
  useGetRegionsMock.mockReturnValue({
    ...defaultValueUseGetRegions,
    ...useGetRegionsMockResponse,
  } as UseGetRegionsMockType)

  useStoresMock.mockImplementationOnce(() => {
    const actual = jest.requireActual('@services/store/Destination')
    return {
      destinationStore: {
        ...actual.default,
        destination: { id: '03', name: 'Bend', stateName: 'Oregon' },
        regions: regionsResponseApi,
        statesGroupedKeys,
        statesGrouped,
        setSearchInput: (value: string) => {
          mockSetSearchInput(value)
          actual.default.setSearchInput(value)
        },
        ...useStoresMockResponse?.destinationStore,
      },
    }
  })

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

  test('WHEN typing in searchField SHOULD handle searchInput value', async () => {
    const { findByPlaceholderText } = setup()

    const searchInput = await findByPlaceholderText(
      'Search by a location or home name',
    )
    expect(searchInput).toBeTruthy()

    const value = 'California'
    fireEvent.changeText(searchInput, value)

    expect(mockSetSearchInput).toHaveBeenCalledWith(value)
    expect(destinationMock.searchInput).toBe(value)

    fireEvent.changeText(searchInput, '')
    expect(destinationMock.searchInput).toBe('')
  })

  test('WHEN statesGroupedKey is empty SHOULD render Empty component ', () => {
    const { queryByText } = setup(
      {},
      {
        destinationStore: {
          statesGroupedKeys: [],
        } as unknown as DestinationStoreType,
      },
    )
    expect(
      queryByText(
        'We could not find any destinations matching your request. Send us a chat if you need help!',
      ),
    ).toBeTruthy()
  })

  test('WHEN searchInput has value SHOULD hide SelectItem with Initial Region Destination(Any Destination)', async () => {
    const { findByPlaceholderText, queryByText } = setup()

    const searchInput = await findByPlaceholderText(
      'Search by a location or home name',
    )
    expect(queryByText(INITIAL_STATE_REGION_DESTINATION.name)).toBeTruthy()

    expect(searchInput).toBeTruthy()

    const value = 'California'
    fireEvent.changeText(searchInput, value)

    expect(destinationMock.searchInput).toBe(value)
    await waitFor(() => {
      expect(queryByText(INITIAL_STATE_REGION_DESTINATION.name)).toBeFalsy()
    })
  })

  test('WHEN press Search button SHOULD back to HomeScreen with las selected Region State in searchInput', async () => {
    const { findByPlaceholderText, findByText } = setup()
    const searchInput = await findByPlaceholderText(
      'Search by a location or home name',
    )

    expect(searchInput).toBeTruthy()

    const value = 'California'
    fireEvent.changeText(searchInput, value)
    expect(destinationMock.searchInput).toBe(value)

    const searchButton = await findByText('Search')

    fireEvent.press(searchButton)

    expect(useNavigation().goBack).toHaveBeenCalled()
  })
})
