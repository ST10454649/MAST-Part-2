import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'ChefsApp/images/Red simple burger store logo .png' }}
        style={styles.image}
      />
      <Text style={styles.logo}>App Logo</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <Button title="Sign In" onPress={() => {}} />
      <Button title="Sign In with Google" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 20,
  },
  logo: {
    fontSize: 40, marginBottom: 20, textAlign: 'center',
  },
  input: {
    borderWidth: 1, padding: 10, marginVertical: 10,
  },
  forgotPassword: {
    color: 'blue', textAlign: 'right', marginBottom: 20,
  },
});

export default LogInScreen;
