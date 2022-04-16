import React from 'react'
import { Dimensions, FlatList, View, Platform, Text } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'
import Icon from '@shared-components/Icon'

import HomeRegion from './components/HomeRegion'
import useGetHomes from './hooks/useGetHomes'
import DatePickerField from './components/DatePickerField'
import styles from './styles'

type HomesRegionsRouteProps = RouteProp<
  ExploreStackParamList,
  ExploreStackEnum.HOMES_REGION_SCREEN
>

type HomeRegionNavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.HOMES_REGION_SCREEN
>

const { height: heightScreen, width } = Dimensions.get('screen')

const ITEM_HEIGHT_BY_OS = Platform.select({ android: 0.7, ios: 0.75 })
const ITEM_HEIGHT = heightScreen * Number(ITEM_HEIGHT_BY_OS ?? 0.7)
const ITEM_WIDTH = width

const HomesRegionScreen = () => {
  const { top } = useSafeAreaInsets()
  const {
    params: { id },
  } = useRoute<HomesRegionsRouteProps>()

  const navigation = useNavigation<HomeRegionNavigationProps>()

  const { data, loading } = useGetHomes({ regionId: id })

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <View
        style={[
          styles.flatListContainer,
          { height: ITEM_HEIGHT, justifyContent: 'center' },
        ]}
      >
        {loading ? (
          <View style={{ alignItems: 'center' }}>
            <Icon icon="logoVowel" />
            <Text style={styles.loadingText}>Loading homes</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            snapToInterval={ITEM_HEIGHT}
            bounces={false}
            snapToAlignment="center"
            removeClippedSubviews={false}
            decelerationRate="fast"
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    height: ITEM_HEIGHT,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 50,
                  }}
                >
                  <Text style={styles.titleEmptyListText}>
                    We couldn’t find any available homes...
                  </Text>
                  <Text style={styles.tipToResolveEmptyListText}>
                    Please, try to select other dates to see available homes
                    inside selected regions.
                  </Text>
                </View>
              )
            }}
            renderItem={({ item, index }) => {
              return (
                <HomeRegion
                  onPressItem={() =>
                    navigation.navigate(ExploreStackEnum.HOME_DETAIL_SCREEN, {
                      id: item.id,
                    })
                  }
                  key={item.id}
                  listStyle={{
                    height: ITEM_HEIGHT,
                    width: ITEM_WIDTH,
                  }}
                  data={item}
                  itemPosition={index + 1}
                />
              )
            }}
          />
        )}
      </View>
      <View style={styles.datePickerContainer}>
        <DatePickerField />
      </View>
    </View>
  )
}
export default HomesRegionScreen
