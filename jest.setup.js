import '@testing-library/jest-native/extend-expect'
import { jest } from '@jest/globals'

afterEach(() => {
  jest.clearAllMocks()
})
// surpressing warning resulted by useLinking due to usage of NavigationContainer
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({ getInitialState: { then: () => null } }),
  __esModule: true,
}))

// surpressing Animated: `useNativeDriver` is not supported warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('expo-linear-gradient', () => {
  const View = require('react-native/Libraries/Components/View/View')
  return {
    LinearGradient: View,
  }
})
