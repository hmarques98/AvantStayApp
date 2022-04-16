import { render, fireEvent } from '@shared/utils/test'
import React from 'react'
import Button from '../Button'

describe('Button', () => {
  test('SHOULD render correctly with props', () => {
    render(<Button title="Button" variant="primaryFilled" />)
  })
  test('SHOULD call onPress once WHEN button has been pressed', () => {
    const onPressMock = jest.fn()
    const { queryByText } = render(
      <Button title="Button" variant="primaryFilled" onPress={onPressMock} />,
    )

    fireEvent.press(queryByText('Button'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})
