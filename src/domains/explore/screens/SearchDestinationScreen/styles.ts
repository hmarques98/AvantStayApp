import { FONT_SSP_400 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  containerLogoLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  containerError: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listHeaderComponent: {
    marginBottom: 18,
  },
  emptyListText: {
    textAlign: 'center',
    fontFamily: FONT_SSP_400,
    fontSize: 16,
    color: '#022B5499',
  },
  emptyListContainer: { alignItems: 'center' },
})
export default styles
