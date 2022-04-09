import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tabs } from '../../shared/models/Screens'
import ExploreHome from '../../domains/explore/screens/ExploreHome'
import BookingsHome from '../../domains/bookings/screens/BookingsHome'
import ProfileHome from '../../domains/profile/screens/ProfileHome'
import SupportHome from '../../domains/support/screens/SupportHome'
import Icon from '../../shared/components/Icon/Icon'
import { RouteProp } from '@react-navigation/native'
import { SvgIcons } from '../../shared/components/Icon/SvgIcons'

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
        tabBarInactiveTintColor: '#022B54',
        tabBarIcon: ({ color }) => renderTabIcon(route as never, color),
      })}
    >
      <Tab.Screen name={Tabs.EXPLORE} component={ExploreHome} />
      <Tab.Screen name={Tabs.BOOKINGS} component={BookingsHome} />
      <Tab.Screen name={Tabs.PROFILE} component={ProfileHome} />
      <Tab.Screen name={Tabs.SUPPORT} component={SupportHome} />
    </Tab.Navigator>
  )
}

export default TabNavigation
