import React from 'react'
import { render, fireEvent } from '@shared/utils/test'
import Destination from '@services/store/Destination'

import SelectItem from '../SelectItem'
import { Region } from '@services/api/graphql/models/Destination'

const defaultRegionDestinationMock = {
  id: '0bb20925-51bc-11ea-adb3-c5da55d0cc57',
  name: 'Nashville',
  stateCode: 'TN',
  stateName: 'Tennessee',
}

const mockToggleDestination = jest.fn()

jest.mock('@services/store', function () {
  const actualDestination = jest.requireActual('@services/store/Destination')
  return {
    useStores: jest.fn(() => {
      return {
        destinationStore: {
          ...actualDestination.default,
          destination: defaultRegionDestinationMock,
          toggleDestination: (destinationRegion: Region) => {
            mockToggleDestination(destinationRegion)
            actualDestination.default.toggleDestination(destinationRegion)
          },
        },
      }
    }),
  }
})

const setup = (region?: Region) => {
  return {
    ...render(<SelectItem region={region ?? defaultRegionDestinationMock} />),
  }
}

describe('SelectItem', () => {
  test('SHOULD render correctly with props', () => {
    const { queryByText } = setup()
    expect(queryByText(defaultRegionDestinationMock.name)).toBeTruthy()
  })

  test('WHEN pressed destination region SHOULD handle destination value', async () => {
    const region = {
      id: '42b755e6-4f50-11e9-afc4-cfeda9af0fec',
      name: 'Coachella Valley',
      stateCode: 'CA',
      stateName: 'California',
    }

    const { findByText } = setup(region)

    const item = await findByText(region.name)
    fireEvent.press(item)

    expect(mockToggleDestination).toHaveBeenCalled()
    expect(Destination.destination).toStrictEqual(region)
  })
})
