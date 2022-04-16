import { render, fireEvent } from '@shared/utils/test'
import React from 'react'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  test('SHOULD render correctly with props', () => {
    render(<Checkbox isChecked />)
  })
  test('SHOULD call onPress once WHEN checkbox has been pressed', () => {
    const onPressMock = jest.fn()
    const { getByA11yRole } = render(
      <Checkbox isChecked onPress={onPressMock} />,
    )

    const button = getByA11yRole('button')
    expect(button).toBeTruthy()
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})
