import React from 'react'
import FieldText from '@shared-components/FieldText'
import { View } from 'react-native'
import Icon from '@shared-components/Icon'
import styles from './styles'

const DatePickerField = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldTextContainer}>
        <FieldText label="When" placeholder="Select dates to see prices" />
      </View>
      <View style={styles.iconContainer} />
      <Icon icon="filter" />
    </View>
  )
}

export default DatePickerField
