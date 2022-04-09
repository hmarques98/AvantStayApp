import React from 'react'
import { render } from '@testing-library/react-native'
import ExploreHome from '../ExploreHome'
describe('ExploreHomeScreen', () => {
  test('SHOULD have three texts inputs', () => {
    const { getByText, getByTestId } = render(<ExploreHome />)
    expect(getByText('Destination')).toBeTruthy()
    expect(getByTestId('imLogo')).toBeTruthy()
  })
})
