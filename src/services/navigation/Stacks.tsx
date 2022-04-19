import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@domains/explore/screens/HomeScreen'
import SearchScreen from '@domains/explore/screens/SearchDestinationScreen'
import HomesRegionScreen from '@domains/explore/screens/HomesRegionScreen'
import HomeDetailScreen from '@domains/explore/screens/HomeDetailScreen'
import CalendarScreen from '@domains/explore/screens/CalendarScreen'

import { ExploreStackEnum } from '@shared-models/Navigation'

export type ExploreStackParamList = {
  [ExploreStackEnum.HOME_SCREEN]: undefined
  [ExploreStackEnum.SEARCH_DESTINATION_SCREEN]: undefined
  [ExploreStackEnum.HOMES_REGION_SCREEN]: {
    id: string
  }
  [ExploreStackEnum.HOME_DETAIL_SCREEN]: {
    id: string
  }
  [ExploreStackEnum.CALENDAR_SCREEN]: undefined
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
          name={ExploreStackEnum.SEARCH_DESTINATION_SCREEN}
          component={SearchScreen}
        />
      </ExploreStack.Group>

      <ExploreStack.Group screenOptions={{ presentation: 'modal' }}>
        <ExploreStack.Screen
          name={ExploreStackEnum.CALENDAR_SCREEN}
          component={CalendarScreen}
        />
      </ExploreStack.Group>
    </ExploreStack.Navigator>
  )
}
