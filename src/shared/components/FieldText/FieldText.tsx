import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface FieldTextProps {
  showDivider?: boolean
  label: string
  placeholder: string
  onPress?(): void
}

const FieldText = ({
  showDivider,
  label,
  placeholder,
  onPress,
}: FieldTextProps) => {
  return (
    <View style={styles.container} testID="vwFieldText">
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </TouchableOpacity>
      {showDivider && <View style={styles.divider} />}
    </View>
  )
}
export default FieldText
