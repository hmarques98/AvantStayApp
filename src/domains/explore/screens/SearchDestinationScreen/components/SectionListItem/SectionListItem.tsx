import HighlightedText from '@domains/explore/components/HighlightedText'
import { Region } from '@services/api/graphql/models/Destination'
import { useStores } from '@services/store'
import Divider from '@shared-components/Divider'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import SelectItem from '../SelectItem'
import styles from './styles'

type SectionListItemProps = { stateName: string }

const SectionListItem = ({ stateName }: SectionListItemProps) => {
  const { destinationStore } = useStores()

  const { statesGrouped, searchInput } = destinationStore

  const showCanSelectAllButton = statesGrouped?.[stateName].length > 1

  return (
    <View style={{ marginBottom: 18 }}>
      <View style={styles.container}>
        <View style={styles.stateAndCountryTextContainer}>
          <HighlightedText
            text={stateName}
            textToHighlight={searchInput}
            textStyleUnHighlightedText={
              !Boolean(searchInput) && { color: '#022B54' }
            }
          />
        </View>

        {showCanSelectAllButton && (
          <TouchableOpacity style={styles.selectAllButton} onPress={() => {}}>
            <Text style={styles.selectAllText}>Select all</Text>
          </TouchableOpacity>
        )}
      </View>

      <Divider />

      <FlatList
        data={statesGrouped[stateName] as Region[]}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => {
          return <SelectItem region={item} key={item.name} />
        }}
      />
    </View>
  )
}

export default observer(SectionListItem)
