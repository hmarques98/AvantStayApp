import React from 'react'
import { View, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import HomeDetailSection from '@domains/explore/components/HomeDetailSection'
import { Home } from '@services/api/graphql/models/Destination'
import Header from '../Header'
import styles from './styles'

type HomeRegionProps = {
  style: {
    width: number
    height: number
  }
  data: Home
  itemPosition: number
  onPressItem(): void
}

const HomeRegion = ({
  style,
  data,
  itemPosition,
  onPressItem,
}: HomeRegionProps) => {
  const randomImageIndex = React.useMemo(
    () => Math.floor(Math.random() * data?.photos.length),
    [data?.photos.length],
  )

  const memoizedStyle = React.useMemo(() => style, [style])

  return (
    <View
      style={[
        styles.container,
        {
          width: memoizedStyle.width - 24,
          height: memoizedStyle.height,
        },
      ]}
    >
      <TouchableWithoutFeedback onPress={onPressItem}>
        <ImageBackground
          style={styles.imageBackgroundContainer}
          imageStyle={{ borderRadius: 10 }}
          source={{
            uri: data.photos[randomImageIndex].url,
          }}
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
