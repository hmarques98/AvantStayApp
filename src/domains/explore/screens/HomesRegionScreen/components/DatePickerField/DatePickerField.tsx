import React from 'react'
import FieldText from '@shared-components/FieldText'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from '@shared-components/Icon'
import styles from './styles'

type DatePickerFieldProps = {
  onPress(): void
  placeholderValue?: string
  quantityBadgeBookSimulation: number
}

const DatePickerField = ({
  onPress,
  placeholderValue,
  quantityBadgeBookSimulation,
}: DatePickerFieldProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.fieldTextContainer}>
        <FieldText
          onPress={onPress}
          label="When"
          placeholderStyle={Boolean(placeholderValue) && { color: '#505051' }}
          placeholder={placeholderValue ?? 'Select dates to see prices'}
        />
      </View>
      <View style={styles.divider} />
      <View>
        {Boolean(quantityBadgeBookSimulation) && (
          <View style={styles.iconContainer}>
            <Text style={styles.quantityBadgeText}>
              {quantityBadgeBookSimulation}
            </Text>
          </View>
        )}
        <Icon icon="filter" />
      </View>
    </TouchableOpacity>
  )
}

export default DatePickerField
