import { StyleSheet } from 'react-native'
import { FONT_SSP_400, FONT_SSP_600 } from '@fonts'

const styles = StyleSheet.create({
  container: {},
  label: { color: '#34AEBC', fontFamily: FONT_SSP_600 },
  placeholder: {
    color: '#022B544D',
    fontFamily: FONT_SSP_400,
    marginVertical: 2,
  },
  divider: {
    backgroundColor: '#022B54',
    opacity: 0.15,
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
})
export default styles
