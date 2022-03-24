import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import BottomNavigation from "./src/Config/BottomNavigation";
import Welcome from "./src/components/welcome";
import MyTabs from "./src/Config/BottomNavigation";
import firebase from "./src/Config/firebase";
// import { Drawer } from "react-native-paper";

export default function App({ navigation }) {
  // const [active, setActive] = React.useState("");

  return (
    <View style={styles.container}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7B1A6",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
