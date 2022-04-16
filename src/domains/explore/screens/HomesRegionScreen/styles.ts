import {
  FONT_SSP_400,
  FONT_SSP_600,
  FONT_SSP_700,
} from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  flatListContainer: { overflow: 'hidden' },
  titleEmptyListText: {
    fontFamily: FONT_SSP_700,
    fontSize: 20,
    color: '#022B54',
    textAlign: 'center',
    lineHeight: 29,
  },
  tipToResolveEmptyListText: {
    fontFamily: FONT_SSP_400,
    fontSize: 16,
    color: '#022B5480',
    textAlign: 'center',
    marginTop: 14,
    lineHeight: 22,
  },
  datePickerContainer: { paddingHorizontal: 26 },
  loadingText: {
    fontFamily: FONT_SSP_600,
    fontSize: 18,
    color: '#022B54',
  },
})
export default styles
