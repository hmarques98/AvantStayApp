import * as React from 'react'
import { LogBox, Text } from 'react-native'

import {
  useFonts,
  SourceSansPro_600SemiBold,
  SourceSansPro_400Regular,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import Navigation from './src/services/navigation/Root'
import { StoresProvider } from '@services/store'
import { ApolloProvider } from '@apollo/client'
import { clientGraphql } from '@services/api/graphql'

if (__DEV__) {
  LogBox.ignoreAllLogs()
  import('./ReactotronConfig')
}

const App = () => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <ApolloProvider client={clientGraphql}>
      <StoresProvider>
        <Navigation />
      </StoresProvider>
    </ApolloProvider>
  )
}

export default App
