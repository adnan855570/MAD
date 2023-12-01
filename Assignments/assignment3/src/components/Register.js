// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Register = ({ navigation }) => {
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleRegister = async () => {
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     try {
//       const userData = { userName, email, password };
//       await AsyncStorage.setItem('userData', JSON.stringify(userData));
//       Alert.alert('Success', 'Registration successful');
//       navigation.navigate('Login');
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>User Name</Text>
//       <TextInput
//         style={styles.input}
//         value={userName}
//         onChangeText={setUserName}
//         placeholder="Enter your user name"
//       />

//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//       />

//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//       />

//       <Text style={styles.label}>Confirm Password</Text>
//       <TextInput
//         style={styles.input}
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         placeholder="Confirm your password"
//         secureTextEntry
//       />

//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 16,
//   },
// });

// export default Regist

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const userData = { userName, email, password };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      Alert.alert('Success', 'Registration successful');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          placeholder="Enter your user name"
        />

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

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.customButton}
          onPress={handleRegister}
        >
          <Text style={styles.customButtonText}>Register</Text>
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

export default Register;

