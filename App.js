import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "./src/Home";

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="home" size={30} color={focused ? "tomato" : "gray"} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="gear" size={30} color={focused ? "tomato" : "gray"} />
        )
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        borderTopWidth: 0,
        height: 70
      },
      tabStyle: {
        paddingVertical: 10,
        backgroundColor: "#262838"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
