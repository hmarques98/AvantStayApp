import React from 'react'
import FieldText from '@shared-components/FieldText'
import { Text, View } from 'react-native'

const DatePickerField = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'rgba(2, 43, 84, 0.15)',
        borderWidth: 1,
        borderRadius: 1.6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginTop: 22,
      }}
    >
      <View style={{ width: '80%' }}>
        <FieldText label="When" placeholder="Select dates to see prices" />
      </View>
      <View
        style={{
          height: '80%',
          width: 2,
          backgroundColor: '#022B5426',
          marginHorizontal: 15,
        }}
      />
      <Text>X</Text>
    </View>
  )
}

export default DatePickerField
