import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RootNavigation from "./src/RootNavigation";

export default function App() {
  const [loading, setLoading] = useState();

  setTimeout(() => {
    setLoading(true);
  }, 3000);

  return <RootNavigation />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
