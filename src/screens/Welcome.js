import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors, hr80 } from "../globals/style";
import logo from "../../assets/Food-Delivery-Scooter-PNG-Transparent.png";

const Welcome = ({ navigation }) => {
  const goToSignup = () => {
    navigation.navigate("signup");
  };

  const goToLogin = () => {
    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hungry Hub </Text>

      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={[hr80, { marginTop: 60 }]} />

      <Text style={styles.textStyle}>
        Find the best food around you at lowest price
      </Text>

      <View style={hr80} />

      <View
        style={[styles.btnout, { flexDirection: "row", alignItems: "center" }]}
      >
        <TouchableOpacity onPress={goToSignup}>
          <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ff4242",
    alignItems: "center",
  },

  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: "center",
    fontWeight: "200",
    marginTop: 60,
    marginVertical: 10,
    paddingHorizontal: 13,
    letterSpacing: 2,
    textTransform: "capitalize",
  },

  logocontainer: {
    marginTop: 100,
    width: "80%",
    height: "30%",
    padding: 20,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  textStyle: {
    fontSize: 20,
    color: colors.col1,
    width: "80%",
    textAlign: "center",
    letterSpacing: 2,
  },

  btn: {
    width: "90%",
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    color: colors.text1,
    backgroundColor: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default Welcome;
