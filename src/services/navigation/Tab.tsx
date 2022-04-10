import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { RouteProp } from '@react-navigation/native'
import Icon from '@shared-components/Icon'
import { SvgIcons } from '@shared-components/Icon/SvgIcons'

import { FONT_SSP_400 } from '@fonts'

import BookingsHome from '@domains/bookings/screens/BookingsHome'
import ProfileHome from '@domains/profile/screens/ProfileHome'
import SupportHome from '@domains/support/screens/SupportHome'
import { Tabs } from '@shared-models/Navigation'

import { ExploreStackNavigation } from './Stacks'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  const renderTabIcon = (route: RouteProp<never>, color: string) => {
    let iconName: SvgIcons = 'search'
    switch (route.name) {
      case Tabs.EXPLORE:
        iconName = 'search'
        break
      case Tabs.BOOKINGS:
        iconName = 'calendar'
        break
      case Tabs.SUPPORT:
        iconName = 'support'
        break
      case Tabs.PROFILE:
        iconName = 'profile'
        break
    }
    return <Icon icon={iconName} color={color} />
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#53C3D0',
        tabBarInactiveTintColor: '#022B5480',
        tabBarIcon: ({ color }) => renderTabIcon(route as never, color),
        tabBarAllowFontScaling: false,
        tabBarLabelStyle: {
          fontFamily: FONT_SSP_400,
          fontSize: 11,
        },
      })}
    >
      <Tab.Screen name={Tabs.EXPLORE} component={ExploreStackNavigation} />
      <Tab.Screen name={Tabs.BOOKINGS} component={BookingsHome} />
      <Tab.Screen name={Tabs.PROFILE} component={ProfileHome} />
      <Tab.Screen name={Tabs.SUPPORT} component={SupportHome} />
    </Tab.Navigator>
  )
}

export default TabNavigation
