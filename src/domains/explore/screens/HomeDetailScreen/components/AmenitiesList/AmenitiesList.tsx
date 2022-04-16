import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'

type AmenitiesListProps = {
  data?: string[]
}

const AmenitiesList = ({ data }: AmenitiesListProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: 50,
        },
      ]}
    >
      <Text style={styles.titleText}>Amenities</Text>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        style={styles.listStyle}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <View style={styles.iconItemContainer}>
                <Text>X</Text>
              </View>

              <Text style={styles.itemNameText} numberOfLines={1}>
                {item}
              </Text>
            </View>
          )
        }}
      />
    </View>
  )
}
export default React.memo(AmenitiesList)
