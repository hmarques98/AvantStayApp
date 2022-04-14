import React from 'react'
import { Dimensions, FlatList, View, Platform } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'
import HomeRegion from './components/HomeRegion'
import useGetHomes from './hooks/useGetHomes'
import DatePickerField from './components/DatePickerField'

export type ExploreNavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.HOMES_REGION_SCREEN
>

const { height: heightScreen, width } = Dimensions.get('screen')

const ITEM_HEIGHT_BY_OS = Platform.select({ android: 0.7, ios: 0.75 })
const ITEM_HEIGHT = heightScreen * Number(ITEM_HEIGHT_BY_OS ?? 0.7)
const ITEM_WIDTH = width

const HomesRegionScreen = () => {
  const { top } = useSafeAreaInsets()

  const { data } = useGetHomes()

  const height = ITEM_HEIGHT

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: top,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 12,
      }}
    >
      <View style={{ height, overflow: 'hidden' }}>
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
          renderItem={({ item, index }) => {
            return (
              <HomeRegion
                key={item.id}
                listSize={{
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
