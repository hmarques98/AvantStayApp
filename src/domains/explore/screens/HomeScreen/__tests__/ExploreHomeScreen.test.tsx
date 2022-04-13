import React from 'react'
import { render } from '@shared/utils/test'
import ExploreHomeScreen from '../ExploreHomeScreen'

describe('ExploreHomeScreen', () => {
  test('SHOULD have three fields text', () => {
    const { getAllByTestId, getByText } = render(<ExploreHomeScreen />)

    expect(getAllByTestId('vwFieldText').length).toBe(3)
    expect(getByText('Any Destination')).toBeTruthy()
    expect(getByText('Select dates')).toBeTruthy()
    expect(getByText('Add guests')).toBeTruthy()
  })
  test('SHOULD have render header with image and iconLogo', () => {
    const { getByTestId } = render(<ExploreHomeScreen />)

    expect(getByTestId('imHouse')).toBeTruthy()
    expect(getByTestId('icLogoText')).toBeTruthy()
  })
})
