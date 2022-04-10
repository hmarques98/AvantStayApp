import { FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  lighterText: {
    fontSize: 18,
    fontFamily: FONT_SSP_600,
    color: '#022B54B3',
  },
  highlightedText: {
    fontSize: 18,
    fontFamily: FONT_SSP_600,
    color: '#022B54',
  },
})
export default styles
