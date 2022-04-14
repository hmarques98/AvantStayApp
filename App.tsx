import * as React from 'react'
import { Text } from 'react-native'

import {
  SourceSansPro_600SemiBold,
  SourceSansPro_400Regular,
  SourceSansPro_900Black,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro'
import Navigation from './src/services/navigation/Root'
import { StoresProvider } from '@services/store'
import { ApolloProvider } from '@apollo/client'
import { clientGraphql } from '@services/api/graphql'
import { useFonts } from 'expo-font'

if (__DEV__) {
  import('./ReactotronConfig')
}

const App = () => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
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
