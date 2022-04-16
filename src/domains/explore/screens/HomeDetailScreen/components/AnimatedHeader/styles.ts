import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  animatedContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 26,
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    width: '100%',
    zIndex: 20,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
})
export default styles
