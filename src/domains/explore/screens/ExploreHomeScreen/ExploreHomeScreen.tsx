import React from 'react'

import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FieldText from '@shared-components/FieldText'
import Button from '@shared-components/Button'

import { NavigationProps } from './models/Navigation'
import styles from './styles'
import { useStores } from '@services/store'
import { observer } from 'mobx-react-lite'
import Header from './components/Header'
import { ExploreStackEnum } from '@shared-models/Navigation'
import Divider from '@shared-components/Divider'
import Tag from '@shared-components/Tag'

const ExploreHomeScreen = () => {
  const navigation = useNavigation<NavigationProps>()

  const { destinationsStore } = useStores()

  const {
    firstDestinationAdded,
    totalDestinations,
    removeDestinationFromList,
  } = destinationsStore

  const goToExploreScreen = () => {
    navigation.navigate(ExploreStackEnum.EXPLORE_SEARCH_SCREEN)
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header />
      <View style={styles.roundedContainer}>
        <View style={styles.inputsContainer}>
          {firstDestinationAdded && totalDestinations > 1 ? (
            <View>
              <Tag
                quantity={totalDestinations - 1}
                value={firstDestinationAdded}
                onPressValue={() =>
                  removeDestinationFromList(firstDestinationAdded)
                }
                onPressPlusQuantity={goToExploreScreen}
              />
              <Divider />
            </View>
          ) : (
            <FieldText
              label="Destination"
              placeholder={
                firstDestinationAdded
                  ? firstDestinationAdded
                  : 'Any Destination'
              }
              placeholderStyle={
                Boolean(firstDestinationAdded) && {
                  color: '#505051',
                  opacity: 1,
                }
              }
              showDivider
              onPress={goToExploreScreen}
            />
          )}

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
