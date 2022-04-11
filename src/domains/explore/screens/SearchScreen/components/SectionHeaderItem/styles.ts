import { FONT_SSP_400, FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  stateTextContainer: { flexDirection: 'row' },
  stateAndCountryTextContainer: { flexDirection: 'row' },
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
  countryText: { fontSize: 18, fontFamily: FONT_SSP_400, color: '#022B54' },
  selectAllButton: { marginLeft: 12, alignSelf: 'flex-end' },
  selectAllText: {
    fontSize: 14,
    color: '#53C3D0',
    fontFamily: FONT_SSP_600,
  },
})
export default styles
