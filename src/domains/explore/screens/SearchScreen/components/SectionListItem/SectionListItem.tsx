import { Region } from '@services/api/graphql/models/Destination'
import { useStores } from '@services/store'
import Divider from '@shared-components/Divider'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { FlatList, View } from 'react-native'
import SectionHeaderItem from '../SectionHeaderItem'
import SelectItem from '../SelectItem'

type SectionListItemProps = { stateName: string }

const SectionListItem = ({ stateName }: SectionListItemProps) => {
  const { destinationsStore } = useStores()

  const { regionsGrouped } = destinationsStore

  return (
    <View style={{ marginBottom: 18 }}>
      <SectionHeaderItem
        stateName={stateName}
        showCanSelectAllButton={regionsGrouped?.[stateName].length > 1}
      />

      <Divider />

      <FlatList
        data={regionsGrouped[stateName] as Region[]}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => {
          return <SelectItem region={item} key={item.name} />
        }}
      />
    </View>
  )
}

export default observer(SectionListItem)
