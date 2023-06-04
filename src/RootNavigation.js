import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./screens/AuthNavigation";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default RootNavigation;
