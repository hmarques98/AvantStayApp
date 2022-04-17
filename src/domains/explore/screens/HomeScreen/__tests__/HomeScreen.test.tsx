import React from 'react'
import { render, fireEvent } from '@shared/utils/test'
import { useNavigation } from '@react-navigation/native'
import { ExploreStackEnum } from '@shared-models/Navigation'
import HomeScreen from '../HomeScreen'

import DestinationStore from '@services/store/Destination'

const destinationMock = DestinationStore as jest.Mocked<typeof DestinationStore>

const setup = () => {
  return render(<HomeScreen />)
}
describe('HomeScreen', () => {
  test('SHOULD have three fields text', () => {
    const { getAllByTestId, getByText } = setup()

    expect(getAllByTestId('vwFieldText').length).toBe(3)
    expect(getByText('Destination')).toBeTruthy()
    expect(getByText('Any destination')).toBeTruthy()

    expect(getByText('Select dates')).toBeTruthy()
    expect(getByText('Check In - Check Out')).toBeTruthy()

    expect(getByText('Add guests')).toBeTruthy()
    expect(getByText('Who')).toBeTruthy()

    expect(getByText('Explore homes')).toBeTruthy()
  })
  test('SHOULD have render header with image and iconLogo', () => {
    const { getByTestId } = setup()

    expect(getByTestId('imHouse')).toBeTruthy()
    expect(getByTestId('icLogoText')).toBeTruthy()
  })

  test('WHEN Destination field is pressed SHOULD navigate to SEARCH_DESTINATION_SCREEN', () => {
    const { getByText } = setup()

    const destinationField = getByText('Destination')
    fireEvent.press(destinationField)

    expect(useNavigation().navigate).toHaveBeenCalledWith(
      ExploreStackEnum.SEARCH_DESTINATION_SCREEN,
    )
  })

  test('WHEN Explore homes button is pressed SHOULD navigate to ExploreStackEnum.HOMES_REGION_SCREEN with region id', () => {
    destinationMock.toggleDestination({
      id: '01',
      name: '',
      stateName: '',
    })

    const { getByText } = setup()

    const exploreHomesButton = getByText('Explore homes')
    fireEvent.press(exploreHomesButton)

    expect(useNavigation().navigate).toHaveBeenCalledWith(
      ExploreStackEnum.HOMES_REGION_SCREEN,
      { id: '01' },
    )
  })
})
