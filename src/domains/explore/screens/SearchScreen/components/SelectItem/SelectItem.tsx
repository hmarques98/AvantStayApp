import Checkbox from '@shared-components/Checkbox'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from './styles'
import HighlightedText from '@domains/explore/screens/components/HighlightedText'
import { FONT_SSP_600 } from '@shared/styles/theme/fonts'

interface SelectItemProps {
  place: string
}

const SelectItem = ({ place }: SelectItemProps) => {
  const [isChecked, setIsChecked] = React.useState(false)

  const typedText = place.substring(0, 4)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsChecked(preview => !preview)}
      hitSlop={{ bottom: 8, top: 8 }}
    >
      <Checkbox
        isChecked={isChecked}
        onPress={() => setIsChecked(preview => !preview)}
      />
      <View style={styles.placeContainer}>
        <HighlightedText
          text={place}
          textToHighlight={typedText}
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
export default SelectItem
