import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreHomeScreen from '@domains/explore/screens/ExploreHomeScreen'
import SearchScreen from '@domains/explore/screens/SearchScreen/SearchScreen'

const ExploreStack = createNativeStackNavigator()

export const ExploreStackNavigation = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Group>
        <ExploreStack.Screen
          name={ExploreHomeScreen.name}
          component={ExploreHomeScreen}
        />
      </ExploreStack.Group>
      <ExploreStack.Group screenOptions={{ animation: 'slide_from_bottom' }}>
        <ExploreStack.Screen name="Search" component={SearchScreen} />
      </ExploreStack.Group>
    </ExploreStack.Navigator>
  )
}
