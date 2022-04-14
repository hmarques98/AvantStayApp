import React from 'react'
import { View, FlatList, Dimensions, Image } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'

import styles from './styles'
import useGetHome from './hooks/useGetHome'
import HomeDetailSection from '@domains/explore/components/HomeDetailSection'

type HomesRegionsRouteProps = RouteProp<
  ExploreStackParamList,
  ExploreStackEnum.HOMES_REGION_SCREEN
>

const { height, width } = Dimensions.get('screen')

const ITEM_HEIGHT = height * 0.4
const ITEM_WIDTH = width

const PADDING_HORIZONTAL = 4

const HomeDetailScreen = () => {
  const {
    params: { id },
  } = useRoute<HomesRegionsRouteProps>()

  const { data, loading } = useGetHome({ id })
  if (loading) return <View style={{ flex: 1 }}></View>

  if (data)
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          data={data?.photos}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.url}
          bounces={false}
          snapToAlignment="center"
          removeClippedSubviews={false}
          decelerationRate="fast"
          snapToInterval={ITEM_WIDTH + PADDING_HORIZONTAL * 2}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const firstItem = index === 0
            const lasItem = data?.photos[data.photos.length - 1]
            return (
              <View
                key={item.url}
                style={{
                  paddingLeft: firstItem ? 0 : PADDING_HORIZONTAL,
                  paddingRight: lasItem ? 0 : PADDING_HORIZONTAL,
                }}
              >
                <Image
                  style={{
                    width: ITEM_WIDTH + PADDING_HORIZONTAL,
                    height: ITEM_HEIGHT,
                  }}
                  source={{ uri: item.url }}
                />
              </View>
            )
          }}
        />

        <View style={{ marginTop: 10, marginBottom: 35 }}>
          <HomeDetailSection data={data} />
        </View>
      </View>
    )
}
export default HomeDetailScreen
