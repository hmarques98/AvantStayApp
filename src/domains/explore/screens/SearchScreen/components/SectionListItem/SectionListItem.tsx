import { Region } from '@services/api/graphql/models/Destination'
import { useStores } from '@services/store'
import Divider from '@shared-components/Divider'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { FlatList, View } from 'react-native'
import SectionHeaderItem from '../SectionHeaderItem'
import SelectItem from '../SelectItem'

const SectionListItem = ({ stateName }: { stateName: string }) => {
  const { destinationsStore } = useStores()

  const { regions } = destinationsStore

  return (
    <View style={{ marginBottom: 18 }}>
      <SectionHeaderItem
        stateName={stateName}
        showCanSelectAllButton={regions?.[stateName].length > 1}
      />

      <Divider />

      <FlatList
        data={regions[stateName] as Region[]}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => {
          return <SelectItem region={item} key={item.name} />
        }}
      />
    </View>
  )
}

export default observer(SectionListItem)
