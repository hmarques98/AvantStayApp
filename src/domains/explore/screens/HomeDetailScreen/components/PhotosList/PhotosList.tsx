import { Home } from '@services/api/graphql/models/Destination'
import React from 'react'
import { Dimensions, FlatList, Image, View } from 'react-native'

const { height, width } = Dimensions.get('screen')

const ITEM_HEIGHT = height * 0.5
const ITEM_WIDTH = width
const PADDING_HORIZONTAL = 4

type Photos = Pick<Home, 'photos'>
type PhotosListProps = Partial<Photos>

const PhotosList = ({ photos }: PhotosListProps) => {
  return (
    <View style={{ height: ITEM_HEIGHT }}>
      <FlatList
        horizontal
        data={photos}
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
          const lasItem = photos?.[photos.length - 1]
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
    </View>
  )
}
export default React.memo(PhotosList)
