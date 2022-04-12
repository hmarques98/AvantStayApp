import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextStyle,
  StyleProp,
} from 'react-native'
import styles from './styles'

interface FieldTextProps {
  label: string
  placeholder: string
  placeholderStyle?: StyleProp<TextStyle>
  onPress?(): void
  showDivider?: boolean
}

const FieldText = ({
  showDivider,
  label,
  placeholder,
  onPress,
  placeholderStyle,
}: FieldTextProps) => {
  return (
    <View style={styles.container} testID="vwFieldText">
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.label}>{label}</Text>

        <Text style={[styles.placeholder, placeholderStyle]}>
          {placeholder}
        </Text>
      </TouchableOpacity>
      {showDivider && <View style={styles.divider} />}
    </View>
  )
}
export default FieldText
