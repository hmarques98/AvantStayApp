import {
  FONT_SSP_400,
  FONT_SSP_400_I,
  FONT_SSP_600,
} from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  sectionDetailContainer: { marginTop: 10, marginBottom: 35 },
  container: { paddingHorizontal: 26 },

  paragraph: { fontFamily: FONT_SSP_400, color: '#505051' },
  em: {
    fontFamily: FONT_SSP_400_I,
    color: '#505051',
  },
  strong: {
    fontFamily: FONT_SSP_600,
    color: '#505051',
  },
  showDescriptionButton: { marginTop: 4, alignSelf: 'flex-start' },
})
export default styles
