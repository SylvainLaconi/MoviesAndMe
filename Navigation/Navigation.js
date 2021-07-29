import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../components/Search";
import FilmDetail from "../components/FilmDetail";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rechercher" component={Search} />
      <Stack.Screen name="FilmDetail" component={FilmDetail} />
    </Stack.Navigator>
  );
};

export default MyStack;
