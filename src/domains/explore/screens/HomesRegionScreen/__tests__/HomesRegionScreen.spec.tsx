import { useNavigation } from '@react-navigation/native'
import { Home } from '@services/api/graphql/models/Destination'
import { ExploreStackEnum } from '@shared-models/Navigation'
import { render, fireEvent } from '@shared/utils/test'
import React from 'react'
import HomesRegionScreen from '../HomesRegionScreen'
import useGetHomes from '../hooks/useGetHomes'

const mockUseGetHomesResponse = [
  {
    id: 'e3564121-51c1-11ea-aff7-8938a92c93c1',
    title: 'Cherokee 6',
    photos: [
      {
        url: 'https://imglite.avantstay.com/homes/e3564121-51c1-11ea-aff7-8938a92c93c1/images/original_156505596.jpeg',
      },
    ],
    bathroomsCount: 3,
    hasPool: true,
    bedsCount: 4,
    regionName: 'Nashville',
    stateCode: 'TN',
    cityName: 'Nashville',
    maxOccupancy: 10,
  },
  {
    id: 'db5dd92d-51c1-11ea-aff7-8d6278492f66',
    title: 'Cherokee 4',
    photos: [
      {
        url: 'https://imglite.avantstay.com/homes/db5dd92d-51c1-11ea-aff7-8d6278492f66/images/original_156505293.jpeg',
      },
    ],
    bathroomsCount: 3,
    hasPool: false,
    bedsCount: 4,
    regionName: 'Nashville',
    stateCode: 'TN',
    cityName: 'Nashville',
    maxOccupancy: 10,
  },
  {
    id: 'df55c767-51c1-11ea-aff7-7f4833a192e9',
    title: 'Cherokee 5',
    photos: [
      {
        url: 'https://imglite.avantstay.com/homes/df55c767-51c1-11ea-aff7-7f4833a192e9/images/original_156505413.jpeg',
      },
    ],
    bathroomsCount: 3,
    hasPool: false,
    bedsCount: 4,
    regionName: 'Nashville',
    stateCode: 'TN',
    cityName: 'Nashville',
    maxOccupancy: 10,
  },
]

type UseGetHomesMockType = ReturnType<typeof useGetHomes>

const useGetHomesMock = useGetHomes as jest.MockedFunction<typeof useGetHomes>

const defaultPayloadResponseUseGetHomes = {
  data: mockUseGetHomesResponse,
  loading: false,
  error: false,
}

jest.mock('../hooks/useGetHomes', () =>
  jest.fn(() => ({
    data: mockUseGetHomesResponse,
    loading: false,
    error: false,
  })),
)

const setup = (useGetHomesMockResponse?: Partial<UseGetHomesMockType>) => {
  useGetHomesMock.mockReturnValue({
    ...defaultPayloadResponseUseGetHomes,
    ...useGetHomesMockResponse,
  } as UseGetHomesMockType)

  return {
    ...render(<HomesRegionScreen />),
  }
}

describe('HomesRegionScreen', () => {
  test('SHOULD render correctly', () => {
    const { queryByTestId, queryByText } = setup()

    expect(queryByText('Select dates to see prices')).toBeTruthy()

    expect(queryByTestId('iconfilter')).toBeTruthy()
  })

  test('WHEN loading is true SHOULD render loading component', () => {
    const { queryByTestId, queryByText } = setup({ loading: true })

    const logoVowelIcon = queryByTestId('iconlogoVowel')

    expect(logoVowelIcon).toBeTruthy()

    expect(queryByText('Loading homes')).toBeTruthy()
  })

  test('WHEN data payload is empty SHOULD render list empty component', () => {
    const { queryByText } = setup({ data: [] })

    expect(queryByText('We couldn’t find any available homes...')).toBeTruthy()
    expect(
      queryByText(
        'Please, try to select other dates to see available homes inside selected regions.',
      ),
    ).toBeTruthy()
  })

  test('WHEN there is data SHOULD render items correctly in list', () => {
    const item = mockUseGetHomesResponse[0]
    const { queryByText } = setup({
      data: [item as Home],
    })

    const { regionName, cityName, stateCode, title, maxOccupancy } = item

    expect(
      queryByText(`${regionName} - ${cityName}, ${stateCode}`),
    ).toBeTruthy()
    expect(queryByText(title)).toBeTruthy()
    expect(queryByText(String(maxOccupancy))).toBeTruthy()

    expect(queryByText(/Bedroom/)).toBeTruthy()
    expect(queryByText(/Bathroom/)).toBeTruthy()
    expect(queryByText(/Pool/)).toBeTruthy()
  })

  test('WHEN press on Photo SHOULD navigate to HOME_DETAIL_SCREEN', async () => {
    const item = mockUseGetHomesResponse[0]
    const { findByTestId } = setup({
      data: [item as Home],
    })
    const photo = await findByTestId('photo')
    fireEvent.press(photo)

    expect(useNavigation().navigate).toHaveBeenCalledWith(
      ExploreStackEnum.HOME_DETAIL_SCREEN,
      {
        id: item.id,
      },
    )
  })
})
