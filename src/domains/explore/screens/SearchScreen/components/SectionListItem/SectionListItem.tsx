import Divider from '@shared-components/Divider'
import React from 'react'
import { FlatList, View } from 'react-native'
import SectionHeaderItem from '../SectionHeaderItem'
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
      <SectionHeaderItem
        city={city}
        country={country}
        showCanSelectAllButton={places.length > 1}
      />

      <Divider />

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
