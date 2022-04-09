import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  roundedContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 400,
    transform: [{ translateY: -80 }],
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputsContainer: {
    borderColor: 'rgba(2, 43, 84, 0.15)',
    borderWidth: 1,
    padding: 20,
    borderRadius: 1.6,
    marginBottom: 20,
  },
})
export default styles
