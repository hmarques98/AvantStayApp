import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from '../Icon/Icon'
// import styles from './styles';

interface CheckboxProps {}

const Checkbox = ({}: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <TouchableOpacity
      style={{
        borderColor: isChecked ? '#53C3D0' : '#CCD5DD',
        borderWidth: 1.6,
        borderRadius: 1.6,
        paddingVertical: 5.25,
        paddingHorizontal: 2.75,
        backgroundColor: isChecked ? '#53C3D0' : 'transparent',
      }}
      onPress={() => setIsChecked(preview => !preview)}
    >
      <Icon icon="check" />
    </TouchableOpacity>
  )
}
export default Checkbox
