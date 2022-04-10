import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreHomeScreen from '@domains/explore/screens/ExploreHomeScreen'
import { Button, Text, View } from 'react-native'

const ExploreStack = createNativeStackNavigator()

const Search = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button
        onPress={() => navigation.push(ExploreHomeScreen.name)}
        title="Dismiss"
      />
    </View>
  )
}

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
        <ExploreStack.Screen name="Search" component={Search} />
      </ExploreStack.Group>
    </ExploreStack.Navigator>
  )
}
