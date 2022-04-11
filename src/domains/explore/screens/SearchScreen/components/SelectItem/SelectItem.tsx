import Checkbox from '@shared-components/Checkbox'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from './styles'
import HighlightedText from '@domains/explore/components/HighlightedText'
import { FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { useStores } from '@services/store'
import { observer } from 'mobx-react-lite'

interface SelectItemProps {
  place: string
}

const SelectItem = ({ place }: SelectItemProps) => {
  const { destinationsStore } = useStores()
  const { searchInput, toggleDestinations, destinations } = destinationsStore

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toggleDestinations(place)}
      hitSlop={{ bottom: 8, top: 8 }}
    >
      <Checkbox
        isChecked={destinations.some(destination => destination === place)}
        onPress={() => {
          toggleDestinations(place)
        }}
      />
      <View style={styles.placeContainer}>
        <HighlightedText
          text={place}
          textToHighlight={searchInput}
          textStyleUnHighlightedText={styles.placeText}
          textStyleHighlightedText={[
            styles.placeText,
            { fontFamily: FONT_SSP_600 },
          ]}
        />
      </View>
    </TouchableOpacity>
  )
}
export default observer(SelectItem)
