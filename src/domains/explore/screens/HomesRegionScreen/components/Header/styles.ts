import { FONT_SSP_400, FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    flexDirection: 'row',
  },
  boldText: {
    fontFamily: FONT_SSP_600,
    color: '#022B54',
    fontSize: 12,
  },
  lightText: {
    fontFamily: FONT_SSP_400,
    color: '#022B54',
    fontSize: 12,
  },
})
export default styles
