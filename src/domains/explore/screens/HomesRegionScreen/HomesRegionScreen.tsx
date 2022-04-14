import React from 'react'
import { Dimensions, FlatList, View, Platform, Text } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteProp, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'

import HomeRegion from './components/HomeRegion'
import useGetHomes from './hooks/useGetHomes'
import DatePickerField from './components/DatePickerField'
import styles from './styles'

export type ExploreNavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.HOMES_REGION_SCREEN
>

type HomesRegionsRouteProps = RouteProp<
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

  const { data } = useGetHomes({ regionId: id })

  const height = ITEM_HEIGHT

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <View
        style={[styles.flatListContainer, { height, justifyContent: 'center' }]}
      >
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          snapToInterval={height}
          bounces={false}
          snapToAlignment="center"
          removeClippedSubviews={false}
          decelerationRate="fast"
          snapToOffsets={[...Array(data?.length)].map((x, i) => i * height - 2)}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  height,
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
                key={item.id}
                listStyle={{
                  height,
                  width: ITEM_WIDTH,
                }}
                data={item}
                itemPosition={index + 1}
              />
            )
          }}
        />
      </View>
      <DatePickerField />
    </View>
  )
}
export default HomesRegionScreen
