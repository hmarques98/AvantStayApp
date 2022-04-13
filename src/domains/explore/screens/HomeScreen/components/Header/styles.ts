import { StyleSheet } from 'react-native'

export const LINEAR_COLORS = [
  '#00000000',
  '#00000000',
  '#0000004D',
  '#00000052',
]

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  image: { width: '100%' },
  logoContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    height: '100%',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
})
export default styles
