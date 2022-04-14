import React from 'react'

import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import FieldText from '@shared-components/FieldText'
import Button from '@shared-components/Button'

import styles from './styles'
import { useStores } from '@services/store'
import { observer } from 'mobx-react-lite'
import Header from './components/Header'
import { ExploreStackEnum } from '@shared-models/Navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ExploreStackParamList } from '@services/navigation/Stacks'
import { INITIAL_STATE_DESTINATION } from '@services/store/Destination'

export type ExploreNavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.HOME_SCREEN
>

const HomeScreen = () => {
  const navigation = useNavigation<ExploreNavigationProps>()

  const { destinationsStore } = useStores()

  const { destination } = destinationsStore

  const goToSearchDestinationScreen = () => {
    navigation.navigate(ExploreStackEnum.SEARCH_SCREEN)
  }

  const goToHomesRegionScreen = () => {
    navigation.navigate(ExploreStackEnum.HOMES_REGION_SCREEN, {
      id: destination.id === INITIAL_STATE_DESTINATION.id ? '' : destination.id,
    })
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Header />
      <View style={styles.roundedContainer}>
        <View style={styles.inputsContainer}>
          <FieldText
            label="Destination"
            placeholder={destination.name}
            placeholderStyle={{
              color: '#505051',
              opacity: 1,
            }}
            showDivider
            onPress={goToSearchDestinationScreen}
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
          onPress={goToHomesRegionScreen}
        />
      </View>
    </ScrollView>
  )
}
export default observer(HomeScreen)
