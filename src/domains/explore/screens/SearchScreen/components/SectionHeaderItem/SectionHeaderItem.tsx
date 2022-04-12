import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HighlightedText from '@domains/explore/components/HighlightedText'
import styles from './styles'
import { useStores } from '@services/store'
import { observer } from 'mobx-react-lite'

interface SectionHeaderProps {
  showCanSelectAllButton: boolean
  stateName: string
}

const SectionHeader = ({
  stateName,
  showCanSelectAllButton,
}: SectionHeaderProps) => {
  const { destinationsStore } = useStores()
  const { searchInput } = destinationsStore

  return (
    <View style={styles.container}>
      <View style={styles.stateAndCountryTextContainer}>
        <HighlightedText text={stateName} textToHighlight={searchInput} />
      </View>
      {showCanSelectAllButton && (
        <TouchableOpacity style={styles.selectAllButton} onPress={() => {}}>
          <Text style={styles.selectAllText}>Select all</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
export default observer(SectionHeader)
