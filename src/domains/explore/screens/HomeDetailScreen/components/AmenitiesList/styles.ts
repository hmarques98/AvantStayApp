import { FONT_SSP_400, FONT_SSP_700 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { paddingHorizontal: 26 },

  listStyle: { marginTop: 30 },
  titleText: {
    fontFamily: FONT_SSP_700,
    color: '#022B54',
    fontSize: 26,
  },
  iconItemContainer: { paddingRight: 18 },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    flex: 1 / 2,
  },
  itemNameText: {
    fontSize: 16,
    fontFamily: FONT_SSP_400,
    color: '#070707B2',
  },
})
export default styles
