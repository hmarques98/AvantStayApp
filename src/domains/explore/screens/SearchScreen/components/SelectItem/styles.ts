import { FONT_SSP_400 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeContainer: { marginLeft: 12 },
  placeText: {
    fontSize: 16,
    fontFamily: FONT_SSP_400,
    color: '#022B54B3',
  },
})
export default styles
