import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { FONT_SSP_400, FONT_SSP_700 } from '@shared/styles/theme/fonts'
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
      <Text
        style={{
          fontFamily: FONT_SSP_700,
          color: '#022B54',
          fontSize: 26,
        }}
      >
        Amenities
      </Text>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        style={{ marginTop: 30 }}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 20,
                flex: 1 / 2,
              }}
            >
              <View style={{ paddingRight: 18 }}>
                <Text>X</Text>
              </View>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONT_SSP_400,
                  color: '#070707B2',
                }}
                numberOfLines={1}
              >
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
