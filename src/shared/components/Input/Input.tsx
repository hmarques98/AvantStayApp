import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface InputProps {
  showDivider?: boolean
  label: string
  placeholder: string
  onPress?(): void
}

const Input = ({ showDivider, label, placeholder, onPress }: InputProps) => {
  return (
    <View style={styles.container} testID="tiInput">
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </TouchableOpacity>
      {showDivider && <View style={styles.divider} />}
    </View>
  )
}
export default Input
