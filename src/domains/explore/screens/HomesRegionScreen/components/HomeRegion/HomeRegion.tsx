import React from 'react'
import { View, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import HomeDetailSection from '@domains/explore/components/HomeDetailSection'
import { Home } from '@services/api/graphql/models/Destination'
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
          <Header position={itemPosition} />
        </ImageBackground>
      </TouchableWithoutFeedback>

      <HomeDetailSection data={data} />
    </View>
  )
}
export default React.memo(HomeRegion)
