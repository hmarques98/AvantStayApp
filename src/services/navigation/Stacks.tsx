import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@domains/explore/screens/HomeScreen'
import SearchScreen from '@domains/explore/screens/SearchScreen'
import HomesRegionScreen from '@domains/explore/screens/HomesRegionScreen/HomesRegionScreen'
import HomeDetailScreen from '@domains/explore/screens/HomeDetailScreen'

import { ExploreStackEnum } from '@shared-models/Navigation'

export type ExploreStackParamList = {
  [ExploreStackEnum.HOME_SCREEN]: undefined
  [ExploreStackEnum.SEARCH_SCREEN]: undefined
  [ExploreStackEnum.HOMES_REGION_SCREEN]: {
    id: string
  }
  [ExploreStackEnum.HOME_DETAIL_SCREEN]: {
    id: string
  }
}

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>()

export const ExploreStackNavigation = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Group>
        <ExploreStack.Screen
          name={ExploreStackEnum.HOME_SCREEN}
          component={HomeScreen}
        />
        <ExploreStack.Screen
          name={ExploreStackEnum.HOMES_REGION_SCREEN}
          component={HomesRegionScreen}
        />
        <ExploreStack.Screen
          name={ExploreStackEnum.HOME_DETAIL_SCREEN}
          component={HomeDetailScreen}
        />
      </ExploreStack.Group>
      <ExploreStack.Group screenOptions={{ animation: 'slide_from_bottom' }}>
        <ExploreStack.Screen
          name={ExploreStackEnum.SEARCH_SCREEN}
          component={SearchScreen}
        />
      </ExploreStack.Group>
    </ExploreStack.Navigator>
  )
}
