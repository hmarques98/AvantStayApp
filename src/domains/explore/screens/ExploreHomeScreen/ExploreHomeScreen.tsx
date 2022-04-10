import React from 'react'

import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FieldText from '@shared-components/FieldText'
import Button from '@shared-components/Button'
import { ExploreStackEnum } from '@shared-models/Navigation'

import { NavigationProps } from './models/Navigation'
import styles from './styles'
import { useStores } from '@services/store'
import { observer } from 'mobx-react-lite'
import Header from './components/Header'

const ExploreHomeScreen = () => {
  const navigation = useNavigation<NavigationProps>()

  const { destinationsStore } = useStores()

  const { searchInput } = destinationsStore

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header />
      <View style={styles.roundedContainer}>
        <View style={styles.inputsContainer}>
          <FieldText
            label="Destination"
            placeholder={searchInput ? searchInput : 'Any Destination'}
            placeholderStyle={
              Boolean(searchInput) && {
                color: '#505051',
                opacity: 1,
              }
            }
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
        <Button
          title="Explore homes"
          variant="primaryOutlined"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  )
}
export default observer(ExploreHomeScreen)
