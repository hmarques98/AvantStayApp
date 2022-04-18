import React from 'react'
import { render, fireEvent } from '@shared/utils/test'

import { Region } from '@services/api/graphql/models/Destination'

import SearchField, { SearchFieldProps } from '../SearchField'

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

const setup = (props?: SearchFieldProps) => {
  return {
    ...render(<SearchField {...props} />),
  }
}

describe('SelectItem', () => {
  test('SHOULD render correctly', () => {
    setup()
  })

  test('WHEN pressed iconSearch SHOULD handle its onPress', () => {
    const onPressSearchIconMock = jest.fn()
    const { getByTestId } = setup({ onPressSearchIcon: onPressSearchIconMock })

    const iconButton = getByTestId('iconsearch')
    fireEvent.press(iconButton)

    expect(onPressSearchIconMock).toHaveBeenCalled()
  })

  test('WHEN pressed iconSearch SHOULD handle its onPress', () => {
    const onPressCloseXIconMock = jest.fn()
    const { getByTestId } = setup({ onPressCloseXIcon: onPressCloseXIconMock })

    const iconButton = getByTestId('iconcloseX')
    fireEvent.press(iconButton)

    expect(onPressCloseXIconMock).toHaveBeenCalled()
  })

  test('WHEN typing in Text Input SHOULD handle value', () => {
    const onChangeTextMock = jest.fn()
    const textInputPlaceholderValueMock = 'textInputPlaceholderValueMock'
    const { getByPlaceholderText } = setup({
      onChangeText: onChangeTextMock,
      placeholder: textInputPlaceholderValueMock,
    })

    const textInput = getByPlaceholderText(textInputPlaceholderValueMock)
    const value = 'California'
    fireEvent.changeText(textInput, value)

    expect(onChangeTextMock).toHaveBeenCalledWith(value)
  })
})
