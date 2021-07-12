import React from "react";
import Search from "./components/Search";
import { View, StyleSheet } from "react-native";

export default function App() {
  return <Search />;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
});
