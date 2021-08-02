import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTab from "./Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./Store/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
    </Provider>
  );
}
