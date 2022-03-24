import React from "react";
import { SafeAreaView, Text, ScrollView } from "react-native-web";
import Slider from "../Config/Slider";
import firebase from "../Config/firebase";
import { Button } from "react-native-paper";
export default function HomeScreen(props) {
  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("user signed out");
        props.navigation.navigate("Sign_In");
      });
  };
  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#f9f8b5", padding: "10px" }}
      >
        <Text
          style={{
            flex: 0,
            color: "#970606",
            fontSize: "20px",
            textAlign: "center",
            fontWeight: "bold",
            margin: "10px",
          }}
        >
          Blood Donation App
        </Text>
        <Slider />
        <Text
          style={{
            fontSize: "15px",
            textAlign: "center",
            color: "#970606",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          About Us
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Button
          mode="contained"
          color="#970606"
          onPress={signout}
          style={{
            marginTop: "10px",
            margin: "10px",
          }}
        >
          Sign Out
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}
