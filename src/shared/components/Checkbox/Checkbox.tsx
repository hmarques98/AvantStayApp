import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Icon from '../Icon/Icon'
import styles from './styles'

interface CheckboxProps extends TouchableOpacityProps {
  isChecked: boolean
}

const Checkbox = ({ isChecked, ...restProps }: CheckboxProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.checkbox,
        {
          borderColor: isChecked ? '#53C3D0' : '#CCD5DD',
          backgroundColor: isChecked ? '#53C3D0' : 'transparent',
        },
      ]}
      {...restProps}
    >
      <Icon icon="check" />
    </TouchableOpacity>
  )
}
export default Checkbox
