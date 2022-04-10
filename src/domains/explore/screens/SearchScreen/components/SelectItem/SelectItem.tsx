import Checkbox from '@shared-components/Checkbox'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

interface SelectItemProps {
  place: string
}

const SelectItem = ({ place }: SelectItemProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Checkbox />
        <View style={{ marginLeft: 12 }}>
          <Text numberOfLines={1}>{place}</Text>
        </View>
      </View>
    </View>
  )
}
export default SelectItem
