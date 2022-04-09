import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Input from "./src/shared/components/Input";
import Tag from "./src/shared/components/Tag";
import Button from "./src/shared/components/Button";
import Checkbox from "./src/shared/components/Checkbox";
import {
  useFonts,
  SourceSansPro_600SemiBold,
  SourceSansPro_400Regular,
  SourceSansPro_900Black,
} from "@expo-google-fonts/source-sans-pro";

const Divider = () => (
  <View
    style={{
      width: "100%",
      backgroundColor: "black",
      height: 1,
      marginVertical: 10,
    }}
  />
);

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Button />
      <Divider />

      <Input />

      <Divider />
      <Tag />
      <Divider />
      <Checkbox />

      <Divider />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
