import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Tabs } from '../../shared/models/Screens'
import TabNavigation from './Tab'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Tabs.TAB_NAVIGATION} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
