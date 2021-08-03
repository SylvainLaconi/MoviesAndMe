import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../components/Search";
import FilmDetail from "../components/FilmDetail";
import Favorites from "../components/Favorites";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{ title: "" }} />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarshowIcon: true,
        tabBarActiveBackgroundColor: "#DDDDDD",
        tabBarInactiveBackgroundColor: "#FFFFFF",
      }}
    >
      <Tab.Screen
        name="Rechercher"
        component={MyStack}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../Images/ic_search.png")}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={Favorites}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../Images/ic_favorite.png")}
                style={styles.icon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default MyTabs;
