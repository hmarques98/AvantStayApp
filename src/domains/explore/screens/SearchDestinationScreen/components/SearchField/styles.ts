import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1 },
  closeXIcon: {
    backgroundColor: '#E8EFF5',
    padding: 8,
    borderRadius: 16,
  },
  animatedDividerView: {
    position: 'absolute',
    marginTop: 12,
    height: 2,
    backgroundColor: '#A3DFE6',
  },
})
export default styles
