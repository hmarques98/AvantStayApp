import React from 'react'
import { render } from '@testing-library/react-native'
import ExploreHome from '../ExploreHomeScreen'
describe('ExploreHomeScreen', () => {
  test('SHOULD have three texts inputs', () => {
    const { getAllByTestId } = render(<ExploreHome />)

    expect(getAllByTestId('tiInput').length).toBe(3)
  })
  test('SHOULD have image and logo', () => {
    const { getByTestId } = render(<ExploreHome />)

    expect(getByTestId('imHouse')).toBeTruthy()
    expect(getByTestId('icon')).toBeTruthy()
  })
})
