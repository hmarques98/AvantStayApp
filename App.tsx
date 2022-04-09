import * as React from 'react'
import { Text } from 'react-native'

import {
  useFonts,
  SourceSansPro_600SemiBold,
  SourceSansPro_400Regular,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import Navigation from './src/services/navigation/Root'

const App = () => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return <Navigation />
}

export default App
