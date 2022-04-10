import React from 'react'
import { View, Text, StyleProp, TextStyle } from 'react-native'
import { handleTextToHighlight } from '@domains/explore/utils/handleTextToHighlight'
import styles from './styles'

type HighlightedTextProps = {
  text: string
  textToHighlight: string
  textStyleUnHighlightedText: StyleProp<TextStyle>
  textStyleHighlightedText: StyleProp<TextStyle>
}

const HighlightedText = ({
  text,
  textToHighlight,
  textStyleUnHighlightedText,
  textStyleHighlightedText,
}: HighlightedTextProps) => {
  const { endTextTransparent, startTextTransparent, textHighlighted } =
    handleTextToHighlight(textToHighlight, text)

  return (
    <View style={styles.container}>
      <Text style={[styles.lighterText, textStyleUnHighlightedText]}>
        {startTextTransparent}
      </Text>
      <Text style={[styles.highlightedText, textStyleHighlightedText]}>
        {textHighlighted}
      </Text>
      <Text
        style={[styles.lighterText, textStyleUnHighlightedText]}
        numberOfLines={1}
      >
        {endTextTransparent}
      </Text>
    </View>
  )
}
export default HighlightedText
