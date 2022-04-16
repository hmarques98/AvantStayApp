import { render } from '@shared/utils/test'
import React from 'react'
import Icon from '../Icon'

describe('Checkbox', () => {
  test('SHOULD render correctly with props', () => {
    render(<Icon icon="arrowLeft" />)
  })
})
