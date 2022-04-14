import { FONT_SSP_400, FONT_SSP_700 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  homeDetailsContainer: { alignItems: 'center' },
  homeLabelText: { color: '#53C3D0', fontFamily: FONT_SSP_400 },
  homeTitleText: {
    color: '#022B54',
    fontFamily: FONT_SSP_700,
    fontSize: 20,
  },
  detailsHomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  detailHomeContainer: { flexDirection: 'row', alignItems: 'center' },
  detailsHomeText: {
    color: '#022B54B3',
    fontFamily: FONT_SSP_400,
    fontSize: 13,
  },
})
export default styles
