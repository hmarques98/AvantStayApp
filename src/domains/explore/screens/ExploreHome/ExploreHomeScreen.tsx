import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './styles'
import { View } from 'react-native'

import Input from '@shared-components/Input'
import Button from '@shared-components/Button'

import Header from './components/Header'

const ExploreHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.roundedContainer}>
        <View style={styles.inputsContainer}>
          <Input
            label="Destination"
            placeholder="Any Destination"
            showDivider
            onPress={() => {}}
          />
          <Input
            label="Check In - Check Out"
            placeholder="Select dates"
            showDivider
          />
          <Input label="Who" placeholder="Add guests" />
        </View>
        <Button />
      </View>
    </SafeAreaView>
  )
}
export default ExploreHomeScreen
