import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Welcome";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  const [loading, setLoading] = useState();

  setTimeout(() => {
    setLoading(true);
  }, 3000);

  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
