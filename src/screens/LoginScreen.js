import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors, titles, btn1, hr80 } from "../globals/style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>

      <View style={styles.inputContainer}>
        <AntDesign
          name="user"
          size={24}
          color={emailFocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(userData) => {
            setEmail(userData);
          }}
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="lock-outline"
          size={24}
          color={passwordFocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(userData) => {
            setPassword(userData);
          }}
          onFocus={() => {
            setPasswordFocus(true);
            setEmailFocus(false);
          }}
          secureTextEntry={showPassword === false ? true : false}
        />
        <Feather
          name={showPassword === false ? "eye-off" : "eye"}
          size={24}
          color="black"
          onFocus={() => {
            setPasswordFocus(true);
            setEmailFocus(false);
          }}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        />
      </View>

      <TouchableOpacity style={btn1}>
        <Text
          style={{
            color: colors.col1,
            fontWeight: "bold",
            fontSize: titles.btntxt,
            letterSpacing: 2,
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With </Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <AntDesign name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.gfIcon}>
            <EvilIcons name="sc-facebook" size={30} color="#3b5998" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80} />

      <Text>
        Don't have an account?
        <Text style={styles.signup}> Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },

  inputContainer: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.col1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 20,
  },

  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },

  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },

  or: {
    fontWeight: "bold",
    color: colors.text1,
    marginVertical: 10,
  },

  gftxt: {
    marginVertical: 10,
    color: colors.text2,
    fontSize: 25,
    letterSpacing: 1,
  },

  gfIcon: {
    width: 50,
    backgroundColor: "#fff",
    elevation: 10,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },

  signup: {
    color: colors.text1,
  },
});

export default LoginScreen;
