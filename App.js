import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "./src/Home";
import Stats from "./src/Stats";

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const AddScreen = () => {
  return (
    <View>
      <Text>Add</Text>
    </View>
  );
};

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
    Stats: {
      screen: Stats,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="bar-chart"
            size={30}
            color={focused ? "tomato" : "gray"}
          />
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
    },
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="plus" size={30} color={focused ? "tomato" : "gray"} />
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
        paddingTop: 10,
        height: 60,
        backgroundColor: "#262838"
      },
      labelStyle: {
        marginTop: 10
      },
      tabStyle: {
        paddingVertical: 5
      }
    }
  }
);

export default createAppContainer(TabNavigator);
