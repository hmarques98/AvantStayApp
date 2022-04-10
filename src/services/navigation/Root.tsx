import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TabNavigation from './Tab'
import { Tabs } from '@shared-models/Navigation'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Tabs.TAB_NAVIGATION} component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation
