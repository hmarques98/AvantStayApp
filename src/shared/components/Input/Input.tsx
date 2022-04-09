import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { FONT_SSP_400, FONT_SSP_600 } from '../../styles/theme/fonts'
// import styles from './styles';

interface InputProps {}

const Input = ({}: InputProps) => {
  return (
    <View style={{ width: '100%' }}>
      <Text style={{ color: '#34AEBC', fontFamily: FONT_SSP_600 }}>Title</Text>
      <TextInput
        value="Any Destination"
        style={{ marginVertical: 2, fontFamily: FONT_SSP_400 }}
      />
      <View
        style={{
          backgroundColor: '#022B54',
          opacity: 0.15,
          height: 1,
          width: '100%',
          marginVertical: 10,
        }}
      />
    </View>
  )
}
export default Input
