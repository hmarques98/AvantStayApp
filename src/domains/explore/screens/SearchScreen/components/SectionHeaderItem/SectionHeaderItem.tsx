import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HighlightedText from '@domains/explore/components/HighlightedText'
import styles from './styles'
import { useStores } from '@services/store'

interface SectionHeaderProps {
  showCanSelectAllButton: boolean
  city: string
  country?: string
}

const SectionHeader = ({
  city,
  country,
  showCanSelectAllButton,
}: SectionHeaderProps) => {
  const { destinationsStore } = useStores()
  const { searchInput } = destinationsStore

  return (
    <View style={styles.container}>
      <View style={styles.cityAndCountryTextContainer}>
        <HighlightedText text={city} textToHighlight={searchInput} />
        {country && <Text style={styles.countryText}> - {country}</Text>}
      </View>
      {showCanSelectAllButton && (
        <TouchableOpacity style={styles.selectAllButton}>
          <Text style={styles.selectAllText}>Select all</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
export default SectionHeader
