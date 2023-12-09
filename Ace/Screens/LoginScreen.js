import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AceContext, { AceProvider } from "../Context/AceContext";



const LoginScreen = ({ navigation }) => {
  const { users } = useContext(AceContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if the provided email and password match any user
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Navigate to the next screen (you can replace 'Home' with your desired screen)
      navigation.navigate("Home", { userId: user.id });
    } else {
      // Display an error message or handle the invalid login
      alert("Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default LoginScreen;

