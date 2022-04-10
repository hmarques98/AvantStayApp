import React from 'react'
import { FlatList, View } from 'react-native'
import LabelItem from '../SectionHeaderItem'
import SelectItem from '../SelectItem'

const SectionListItem = ({
  city,
  country,
  places,
}: {
  city: string
  country?: string
  places: string[]
}) => {
  return (
    <View style={{ marginBottom: 18 }}>
      <LabelItem
        city={city}
        country={country}
        showCanSelectAll={places.length > 1}
      />
      <FlatList
        data={places}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <SelectItem place={item} key={item} />
        }}
      />
    </View>
  )
}

export default SectionListItem
