import React from 'react'
import { render } from '@shared/utils/test'
import SearchDestinationScreen from '../SearchDestinationScreen'

import DestinationStore from '@services/store/Destination'
import useGetRegions from '../hooks/useGetRegions'
import { ApolloError } from '@apollo/client'

const destinationMock = DestinationStore as jest.Mocked<typeof DestinationStore>

jest.mock('@services/store/Destination', () => {
  const actual = jest.requireActual('@services/store/Destination')
  return {
    destination: { id: '03', name: 'Bend', stateName: 'Oregon' },
    regions: [
      { id: '01', name: 'Sonoma', stateName: 'California' },
      { id: '02', name: 'Nashville', stateName: 'Tennessee' },
      { id: '03', name: 'Bend', stateName: 'Oregon' },
      { id: '04', name: 'San Diego', stateName: 'California' },
    ],
    statesGroupedKeys: ['California', 'Tennessee', 'Oregon'],
    statesGrouped: {
      California: [
        { id: '01', name: 'Sonoma', stateName: 'California' },
        { id: '04', name: 'San Diego', stateName: 'California' },
      ],
      Tennessee: [{ id: '02', name: 'Nashville', stateName: 'Tennessee' }],
      Oregon: [{ id: '03', name: 'Bend', stateName: 'Oregon' }],
    },
    ...actual.default,
  }
})

const useGetRegionsMock = useGetRegions as jest.MockedFunction<
  typeof useGetRegions
>

const mockUseGetRegionsResponse = {
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

  return render(<SearchDestinationScreen />)
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

  test('WHEN loading is true SHOULD render loading content', () => {
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
  })
})
