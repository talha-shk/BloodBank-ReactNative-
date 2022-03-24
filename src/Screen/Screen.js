import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native-web";
import firebase from "../Config/firebase";

export default function Screen(props) {
  console.log(props.uid);
  const [data, setdata] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("users")
      .child(props.uid)
      .once("value", (snapshot) => {
        const data11 = snapshot.toJSON();
        console.log("innerr", data11);
        setdata(data11);
      });
  }, []);
  console.log("outer", data);

  return (
    // <Text>ahahahahah</Text>
    <ScrollView
      style={{
        backgroundColor: "#f9f8b5",
      }}
    >
      <Text
        style={{
          margin: "10px",
          fontSize: "30px",
          textAlign: "center",
          color: "#b22126",
        }}
      >
        User Information
      </Text>
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
            {data.name}
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
            <Text style={{ fontWeight: "bold", color: "#f9f8b5" }}>Type:</Text>
            <Text style={{ fontWeight: "bold", color: "#f9f8b5" }}>Email:</Text>
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
            <Text style={{ color: "#f9f8b5" }}>{data.type}</Text>
            <Text style={{ color: "#f9f8b5" }}>{data.email}</Text>
            <Text style={{ color: "#f9f8b5" }}>{data.bloodgroup}</Text>
            <Text style={{ color: "#f9f8b5" }}>{data.contact}</Text>
            {/* <View> */}
            <Text style={{ color: "#f9f8b5" }}>{data.adres}</Text>
            {/* </View> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
