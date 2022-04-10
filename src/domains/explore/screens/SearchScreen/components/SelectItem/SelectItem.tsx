import { FONT_SSP_400 } from '@fonts'
import Checkbox from '@shared-components/Checkbox'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

interface SelectItemProps {
  place: string
}

const SelectItem = ({ place }: SelectItemProps) => {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsChecked(preview => !preview)}
      hitSlop={{ bottom: 8, top: 8 }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Checkbox
          isChecked={isChecked}
          onPress={() => setIsChecked(preview => !preview)}
        />
        <View style={{ marginLeft: 12 }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontFamily: FONT_SSP_400,
              color: '#022B54B3',
            }}
          >
            {place}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default SelectItem
