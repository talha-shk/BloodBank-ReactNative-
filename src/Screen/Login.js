import React from "react";
import { View, Text, ScrollView } from "react-native-web";
import { TextInput, Button } from "react-native-paper";
import firebase from "../Config/firebase";
export default function Login(props) {
  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(text, text2)
      .then((res) => {
        console.log(res.user.uid);
        props.navigation.navigate("DrawerScreen", {
          uid: res.user.uid,
        });
      })
      .catch((err) => alert(err));
  };

  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  return (
    <ScrollView
      style={{
        padding: "10px",
        backgroundColor: "#f9f8b5",
      }}
    >
      <Text
        style={{
          fontSize: "30px",
          color: "#b22126",
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        Log In
      </Text>
      <Text
        style={{
          fontSize: "20px",
          color: "#262626",
          textAlign: "center",
        }}
      >
        And start donating
      </Text>
      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
        activeUnderlineColor="#b22126"
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
          color: "#460a0f",
          selectionColor: "#460a0f",
        }}
      />
      <TextInput
        label="Password"
        value={text2}
        onChangeText={(text2) => setText2(text2)}
        activeUnderlineColor="#b22126"
        secureTextEntry={true}
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
          selectionColor: "#460a0f",
        }}
      />
      <Button
        mode="contained"
        onPress={() => login()}
        color="#b22126"
        style={{
          margin: "10px",
          fontWeight: "bold",
        }}
      >
        Log In
      </Button>
      <Text
        style={{
          fontSize: "10px",
          color: "#b22126",
          textAlign: "center",
        }}
      >
        Don't have an account?
      </Text>
      <Button
        mode="contained"
        onPress={() => props.navigation.navigate("Sign_Up")}
        color="#b22126"
        style={{
          fontWeight: "bold",
          margin: "10px",
        }}
      >
        Create Account
      </Button>
    </ScrollView>
  );
}
