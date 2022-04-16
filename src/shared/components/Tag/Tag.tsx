import Icon from '@shared-components/Icon'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

type TagProps = {
  value: string
  quantity?: number
  onPressPlusQuantity?(): void
  onPressValue?(): void
}

const Tag = ({
  value,
  quantity,
  onPressValue,
  onPressPlusQuantity,
}: TagProps) => {
  return (
    <View style={[styles.container, Boolean(quantity) && { marginRight: 8 }]}>
      <TouchableOpacity
        style={styles.valueButtonContainer}
        onPress={onPressValue}
      >
        <Text style={styles.valueText}>{value}</Text>
        <Icon icon="closeX" color="#53C3D0" opacity={1} />
      </TouchableOpacity>

      {Boolean(quantity) && (
        <TouchableOpacity
          style={styles.quantityButtonContainer}
          onPress={onPressPlusQuantity}
        >
          <Text style={styles.quantityText}>+{quantity}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
export default Tag
