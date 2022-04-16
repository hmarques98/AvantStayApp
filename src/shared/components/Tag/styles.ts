import { FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  valueButtonContainer: {
    backgroundColor: '#DDF3F699',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  valueText: {
    color: '#34AEBC',
    fontFamily: FONT_SSP_600,
    marginRight: 10,
  },
  quantityButtonContainer: {
    backgroundColor: '#34AEBC',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  quantityText: {
    fontSize: 15,
    fontFamily: FONT_SSP_600,
    color: '#ffffff',
  },
})
export default styles
