import { render, fireEvent } from '@shared/utils/test'
import React from 'react'
import Tag from '../Tag'

describe('Checkbox', () => {
  test('SHOULD render correctly with props', () => {
    render(<Tag value="Nashville" quantity={2} />)
  })

  test('SHOULD call onPressValue once WHEN value has been pressed ', () => {
    const onPressValueMock = jest.fn()
    const { queryByText } = render(
      <Tag value="Nashville" onPressValue={onPressValueMock} />,
    )
    const valueTagButton = queryByText('Nashville')
    expect(valueTagButton).toBeTruthy()
    fireEvent.press(valueTagButton)
    expect(onPressValueMock).toHaveBeenCalledTimes(1)
  })

  test('SHOULD call onPressPlusQuantity once WHEN quantity has been pressed ', () => {
    const onPressPlusQuantity = jest.fn()

    const { queryByText } = render(
      <Tag
        value="Nashville"
        quantity={2}
        onPressPlusQuantity={onPressPlusQuantity}
      />,
    )
    expect(queryByText('Nashville')).toBeTruthy()

    const quantityTagButton = queryByText('+2')
    expect(quantityTagButton).toBeTruthy()

    fireEvent.press(quantityTagButton)
    expect(onPressPlusQuantity).toHaveBeenCalledTimes(1)
  })

  test('WHEN prop quantity has not been passed SHOULD not render quantity tag button', () => {
    const onPressPlusQuantity = jest.fn()

    const { queryByText } = render(
      <Tag value="Nashville" onPressPlusQuantity={onPressPlusQuantity} />,
    )
    expect(queryByText('Nashville')).toBeTruthy()
    const quantityTagButton = queryByText('+')
    expect(quantityTagButton).toBeFalsy()
  })
})
