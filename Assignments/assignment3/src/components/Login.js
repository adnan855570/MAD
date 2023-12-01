import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve user data from AsyncStorage
      const userDataString = await AsyncStorage.getItem('userData');

      if (userDataString) {
        const userData = JSON.parse(userDataString);

        // Check if email and password match
        if (userData.email === email && userData.password === password) {
          Alert.alert('Success', 'Login successful');
          navigation.navigate('Form'); // Navigate to the Form upon successful login
        } else {
          Alert.alert('Error', 'Incorrect email or password');
        }
      } else {
        Alert.alert('Error', 'User not found. Please register.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.customButton}
          onPress={handleLogin}
        >
          <Text style={styles.customButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center content horizontally
    backgroundColor: 'offwhite', // Custom background color
  },
  formContainer: {
    backgroundColor: 'white', // Off-white background for the form
    borderRadius: 10, // Rounded corners for the form
    padding: 16,
    width: '80%', // Adjust the width as needed
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray', // Custom border color
    borderRadius: 8, // Rounded corners for the input boxes
    padding: 12, // Increased padding
    marginBottom: 16,
    fontSize: 16,
  },
  customButton: {
    backgroundColor: 'red', // Custom button background color
    borderRadius: 10, // Rounded corners for the button
    padding: 12,
    alignItems: 'center',
  },
  customButtonText: {
    color: 'black', // Custom button text color
    fontSize: 18,
  },
});

export default Login;
