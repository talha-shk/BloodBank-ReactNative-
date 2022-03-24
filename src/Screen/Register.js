import React from "react";
import { View, Text, ScrollView } from "react-native-web";
import { TextInput, Button } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import firebase from "../Config/firebase";
export default function Register(props) {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [contact, setcontact] = React.useState("");
  const [type, settype] = React.useState("");
  const [adres, setadres] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [bloodgroup, setbloodgroup] = React.useState("");

  const register = () => {
    console.log(name);
    console.log(email);
    console.log(contact);
    console.log(type);
    console.log(adres);
    console.log(password);
    console.log(bloodgroup);
    if (
      type.toString().toLowerCase() == "donate" ||
      type.toString().toLowerCase() == "get"
    ) {
      // console.log(name)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          console.log(data.user.uid);

          const datanew = firebase
            .database()
            .ref("users")
            .child(data.user.uid)
            .set({
              name: name,
              email: email,
              password: password,
              contact: contact,
              type: type.toString().toLowerCase(),
              adres: adres,
              bloodgroup: bloodgroup,
            });
          props.navigation.navigate("Sign_In");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please select correct type (Donate/Get)");
    }
  };

  return (
    <ScrollView
      style={{
        padding: "10px",
        marginTop: "10px",
        backgroundColor: "#f9f8b5",
      }}
    >
      <Text
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: "#30302f",
        }}
      >
        If you don't have an account
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: "30px",
          color: "#b22126",
        }}
      >
        Register with us
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#30302f",
        }}
      >
        start donating and save lives
      </Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(name) => setname(name)}
        activeUnderlineColor="#b22126"
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
        }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setemail(email)}
        activeUnderlineColor="#b22126"
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
        }}
      />
      <TextInput
        label="password"
        value={password}
        onChangeText={(name) => setpassword(name)}
        activeUnderlineColor="#b22126"
        secureTextEntry={true}
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
        }}
      />
      <TextInput
        label="Contact"
        value={contact}
        onChangeText={(contact) => setcontact(contact)}
        activeUnderlineColor="#b22126"
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
        }}
      />
      <TextInput
        label="Blood Group"
        value={bloodgroup}
        onChangeText={(type) => setbloodgroup(type)}
        activeUnderlineColor="#b22126"
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
        }}
      />
      <TextInput
        label="Donate or Get"
        value={type}
        onChangeText={(type) => settype(type)}
        activeUnderlineColor="#b22126"
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
        }}
      />
      <TextInput
        label="Address"
        value={adres}
        onChangeText={(adres) => setadres(adres)}
        activeUnderlineColor="#b22126"
        style={{
          margin: "10px",
          backgroundColor: "#f9f8b5",
        }}
      />
      <Button
        mode="contained"
        onPress={() => register()}
        color="#b22126"
        style={{
          margin: "10px",
        }}
      >
        Register
      </Button>
      <Text
        style={{
          textAlign: "center",
          fontSize: "10px",
          color: "#b22126",
          margin: "10px",
        }}
      >
        Already have an Account?
      </Text>
      <Button
        mode="contained"
        onPress={() => props.navigation.navigate("Sign_In")}
        color="#b22126"
        style={{
          margin: "10px",
        }}
      >
        Sign In
      </Button>
    </ScrollView>
  );
}
