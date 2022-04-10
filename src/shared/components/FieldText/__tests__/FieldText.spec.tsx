import React from 'react'
import { render, fireEvent } from '@shared/utils/test'
import FieldText from '../FieldText'

const setup = () => {
  const mockOnPress = jest.fn()
  const mockProps = {
    label: 'Destination',
    placeholder: 'Any Destination',
  }
  return {
    ...render(<FieldText onPress={mockOnPress} {...mockProps} />),
    mockOnPress,
    mockProps,
  }
}
describe('FieldText', () => {
  test('SHOULD render with label and placeholder props', () => {
    const { getByText, mockProps } = setup()

    expect(getByText(mockProps.label)).toBeTruthy()
    expect(getByText(mockProps.placeholder)).toBeTruthy()
  })

  test('SHOULD call onPress WHEN component is pressed', () => {
    const { getByTestId, mockOnPress } = setup()

    const vmFieldText = getByTestId('vwFieldText')
    expect(vmFieldText).toBeTruthy()
    fireEvent.press(vmFieldText)

    expect(mockOnPress).toHaveBeenCalled()
  })
})
