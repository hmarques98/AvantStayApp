import HomeDetailSection from '@domains/explore/components/HomeDetailSection'
import { Home } from '@services/api/graphql/models/Destination'
import { useStores } from '@services/store'
import React from 'react'
import { View, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import Header from '../Header'
import styles from './styles'

type HomeRegionProps = {
  listStyle: {
    width: number
    height: number
  }
  data: Home
  itemPosition: number
  onPressItem(): void
}

const HomeRegion = ({
  listStyle,
  data,
  itemPosition,
  onPressItem,
}: HomeRegionProps) => {
  const { destinationsStore } = useStores()
  const { getHomesListSize } = destinationsStore
  return (
    <View
      style={[
        styles.container,
        {
          width: listStyle.width - 24,
          height: listStyle.height,
        },
      ]}
    >
      <TouchableWithoutFeedback onPress={onPressItem}>
        <ImageBackground
          style={styles.imageBackgroundContainer}
          imageStyle={{ borderRadius: 10 }}
          source={{ uri: data.photos[0].url }}
          resizeMode="cover"
        >
          <Header homesSize={getHomesListSize} position={itemPosition} />
        </ImageBackground>
      </TouchableWithoutFeedback>

      <HomeDetailSection data={data} />
    </View>
  )
}
export default HomeRegion
