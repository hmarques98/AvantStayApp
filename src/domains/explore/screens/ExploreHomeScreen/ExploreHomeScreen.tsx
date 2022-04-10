import React from 'react'

import styles from './styles'
import { ScrollView, View } from 'react-native'

import Input from '@shared-components/Input'
import Button from '@shared-components/Button'
import Header from './components/Header'

const ExploreHomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} bounces={false}>
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
        <Button
          title="Explore homes"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    </ScrollView>
  )
}
export default ExploreHomeScreen
