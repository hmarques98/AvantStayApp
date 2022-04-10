import React from 'react'

import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FieldText from '@shared-components/FieldText'
import Button from '@shared-components/Button'
import { ExploreStackEnum } from '@shared-models/Navigation'

import Header from './components/Header'
import { NavigationProps } from './models/Navigation'
import styles from './styles'

const ExploreHomeScreen = () => {
  const navigation = useNavigation<NavigationProps>()

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header />
      <View style={styles.roundedContainer}>
        <View style={styles.inputsContainer}>
          <FieldText
            label="Destination"
            placeholder="Any Destination"
            showDivider
            onPress={() =>
              navigation.navigate(ExploreStackEnum.EXPLORE_SEARCH_SCREEN)
            }
          />
          <FieldText
            label="Check In - Check Out"
            placeholder="Select dates"
            showDivider
          />
          <FieldText label="Who" placeholder="Add guests" />
        </View>
        <Button title="Explore homes" variant="primaryOutlined" />
      </View>
    </ScrollView>
  )
}
export default ExploreHomeScreen
