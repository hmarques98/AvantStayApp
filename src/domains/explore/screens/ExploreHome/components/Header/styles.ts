import { StyleSheet } from 'react-native'

export const LINEAR_COLORS = [
  '#00000052',
  '#00000000',
  '#00000000',
  '#0000004D',
]

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  image: { width: '100%' },
  logoContainer: {
    position: 'absolute',
    paddingTop: 28,
    width: '100%',
    alignItems: 'center',
  },
  linearGradient: { position: 'absolute', width: '100%', height: 400 },
})
export default styles
