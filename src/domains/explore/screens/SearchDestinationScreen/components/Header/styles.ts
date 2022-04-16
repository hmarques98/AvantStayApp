import { FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between' },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backButtonTextContainer: { marginLeft: 12 },
  backButtonText: {
    fontFamily: FONT_SSP_600,
    color: '#022B54',
    fontSize: 18,
  },
  clearText: {
    fontFamily: FONT_SSP_600,
    color: '#53C3D0',
    fontSize: 18,
  },
})
export default styles
