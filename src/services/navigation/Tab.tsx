import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from "../../shared/models/Screens";
import ExploreHome from "../../domains/explore/screens/ExploreHome";
import BookingsHome from "../../domains/bookings/screens/BookingsHome";
import ProfileHome from "../../domains/profile/screens/ProfileHome";
import SupportHome from "../../domains/support/screens/SupportHome";
import Icon from "../../shared/components/Icon/Icon";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number
  ) => {
    let iconName = "home";
    switch (route.name) {
      case Tabs.EXPLORE:
        iconName = focused ? "home" : "home-outline";
        break;
      case Tabs.BOOKINGS:
        iconName = focused ? "search" : "search-outline";
        break;
      case Tabs.SUPPORT:
        iconName = focused ? "notifications" : "notifications-outline";
        break;
      case Tabs.PROFILE:
        iconName = focused ? "person" : "person-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return <Icon icon="search" color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#53C3D0",
        tabBarInactiveTintColor: "#022B54",
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
      })}
    >
      <Tab.Screen name={Tabs.EXPLORE} component={ExploreHome} />
      <Tab.Screen name={Tabs.BOOKINGS} component={BookingsHome} />
      <Tab.Screen name={Tabs.PROFILE} component={ProfileHome} />
      <Tab.Screen name={Tabs.SUPPORT} component={SupportHome} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
