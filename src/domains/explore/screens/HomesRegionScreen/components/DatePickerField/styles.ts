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
  iconContainer: {
    height: '80%',
    width: 2,
    backgroundColor: '#022B5426',
    marginHorizontal: 15,
  },
})
export default styles
