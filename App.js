import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
// const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
      screenOptions={{
        headerStyle: { backgroundColor: "#3c0a6b" },
        headerTintColor: "white",
      }}
    >
      <BottomTab.Navigator initialRouteName="User">
        <BottomTab.Screen name="Welcome" component={WelcomeScreen} />
        <BottomTab.Screen name="User" component={UserScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
