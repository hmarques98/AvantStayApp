import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FONT_SSP_600 } from '../../styles/theme/fonts'
// import styles from './styles';

interface ButtonProps {}

const Button = ({}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: '#011B35',
        borderWidth: 2,
        paddingVertical: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#011B35', fontFamily: FONT_SSP_600 }}>
        Explore homes
      </Text>
    </TouchableOpacity>
  )
}
export default Button
