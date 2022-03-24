import React, { useState } from "react";
import { ScrollView, View, Text, Image, Button } from "react-native-web";

import firebase from "../Config/firebase";
export default function User() {
  let [data, setdata] = useState([]);

  const Donate = () => {
    var data1 = [];
    firebase
      .database()
      .ref("users")
      .orderByChild("type")
      .equalTo("donate")
      .once("value", (snapshot) => {
        const data11 = snapshot.toJSON();
        const value = Object.values(data11);

        console.log(value);
        setdata(value);
      });
  };

  const getuser = () => {
    var data1 = [];
    firebase
      .database()
      .ref("users")
      .orderByChild("type")
      .equalTo("get")
      .once("value", (snapshot) => {
        const data11 = snapshot.toJSON();
        const value = Object.values(data11);

        console.log(value);
        setdata(value);
      });
  };
  console.log(data);
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
          color: " #b22126",
          textAlign: " center",
          fontSize: "20px",
          fontWeight: "bold",
          margin: "10px",
        }}
      >
        Filter Users
      </Text>
      <Button
        title="Receivers"
        onPress={() => getuser()}
        color="#b22126"
      ></Button>
      <Text
        style={{
          color: " #b22126",
          textAlign: " center",
          fontSize: "15px",
          margin: "10px",
        }}
      >
        or
      </Text>
      <Button
        title="Donators"
        onPress={() => Donate()}
        color="#b22126"
      ></Button>

      {data.map((v, i) => {
        return (
          <View
            style={{
              // border: "2px solid red",
              flex: 1,
              marginTop: "10px",
              marginBottom: "10px",
              width: "100%",
              height: "auto",
              borderRadius: 20,
              backgroundColor: "#b22126",
              color: "#f9f8b5",
              padding: "10px",
            }}
          >
            <View
              style={{
                flex: 1,
                // border: "2px solid red",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={{ uri: require("../images/avatar.jpg") }}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Text
                style={{
                  marginLeft: "10px",
                  fontWeight: "bold",
                  color: "#f9f8b5",
                }}
              >
                {v.name}
              </Text>
            </View>
            <View
              style={{
                // flex: 1,
                flexDirection: "row",
                // justifyContent: "space-around",
                marginTop: "10px",
              }}
            >
              <View>
                <Text style={{ fontWeight: "bold", color: "#f9f8b5" }}>
                  Type:
                </Text>
                <Text style={{ fontWeight: "bold", color: "#f9f8b5" }}>
                  Email:
                </Text>
                <Text style={{ fontWeight: "bold", color: "#f9f8b5" }}>
                  Blood Type:
                </Text>
                <Text style={{ fontWeight: "bold", color: "#f9f8b5" }}>
                  Contact:
                </Text>
                <Text style={{ fontWeight: "bold", color: "#f9f8b5" }}>
                  Address:
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: "10px" }}>
                <Text style={{ color: "#f9f8b5" }}>{v.type}</Text>
                <Text style={{ color: "#f9f8b5" }}>{v.email}</Text>
                <Text style={{ color: "#f9f8b5" }}>{v.bloodgroup}</Text>
                <Text style={{ color: "#f9f8b5" }}>{v.contact}</Text>
                {/* <View> */}
                <Text style={{ color: "#f9f8b5" }}>{v.adres}</Text>
                {/* </View> */}
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
