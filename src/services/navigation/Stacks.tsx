import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreHomeScreen from '@domains/explore/screens/ExploreHomeScreen'
import SearchScreen from '@domains/explore/screens/SearchScreen/SearchScreen'
import { ExploreStackEnum } from '@shared-models/Navigation'

export type ExploreStackParamList = {
  [ExploreStackEnum.EXPLORE_HOME_SCREEN]: undefined
  [ExploreStackEnum.EXPLORE_SEARCH_SCREEN]: undefined
}

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>()

export const ExploreStackNavigation = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Group>
        <ExploreStack.Screen
          name={ExploreStackEnum.EXPLORE_HOME_SCREEN}
          component={ExploreHomeScreen}
        />
      </ExploreStack.Group>
      <ExploreStack.Group screenOptions={{ animation: 'slide_from_bottom' }}>
        <ExploreStack.Screen
          name={ExploreStackEnum.EXPLORE_SEARCH_SCREEN}
          component={SearchScreen}
        />
      </ExploreStack.Group>
    </ExploreStack.Navigator>
  )
}
