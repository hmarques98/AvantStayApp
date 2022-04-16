import Checkbox from '@shared-components/Checkbox'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import HighlightedText from '@domains/explore/components/HighlightedText'
import { FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { useStores } from '@services/store'
import { observer } from 'mobx-react-lite'
import { Region } from '@services/api/graphql/models/Destination'

interface SelectItemProps {
  region: Region
}

const SelectItem = ({ region }: SelectItemProps) => {
  const { destinationsStore } = useStores()
  const { searchInput, destination, toggleDestination } = destinationsStore

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toggleDestination(region)}
      hitSlop={{ bottom: 8, top: 8 }}
    >
      <Checkbox
        isChecked={destination.name === region.name}
        onPress={() => {
          toggleDestination(region)
        }}
      />
      <View style={styles.placeContainer}>
        {destination.name === region.name ? (
          <Text
            style={[
              styles.placeText,
              { fontFamily: FONT_SSP_600, color: '#022B54' },
            ]}
          >
            {region.name}
          </Text>
        ) : (
          <HighlightedText
            text={region?.name}
            textToHighlight={searchInput}
            textStyleUnHighlightedText={styles.placeText}
            textStyleHighlightedText={[
              styles.placeText,
              { fontFamily: FONT_SSP_600 },
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}
export default observer(SelectItem)
