import { FONT_SSP_600 } from '@shared/styles/theme/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'rgba(2, 43, 84, 0.15)',
    borderWidth: 1,
    borderRadius: 1.6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 22,
    width: '100%',
  },
  fieldTextContainer: { flex: 1 },
  divider: {
    height: '80%',
    width: 2,
    backgroundColor: '#022B5426',
    marginHorizontal: 15,
  },
  iconContainer: {
    position: 'absolute',
    right: -6,
    top: -6,
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: '#022B54',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  quantityBadgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontFamily: FONT_SSP_600,
    textAlign: 'center',
  },
})
export default styles
