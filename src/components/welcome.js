import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Welcome(props) {
  console.log(props);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Sign_In");
    }, 5000);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../images/ekg-2069872.svg")}
          style={{
            width: 140,
            height: 140,
            resizeMode: "contain",
            marginTop: -80,
          }}
        />
        <Text style={styles.title}>
          Donate Blood <br /> Save lives{" "}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f8b5",
  },

  title: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 3,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Welcome;
