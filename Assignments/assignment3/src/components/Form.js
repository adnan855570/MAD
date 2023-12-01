import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Form = ({ navigation }) => {
  const [cvData, setCVData] = useState({
    // Replace these with actual fields from your CV form data structure
    name: '',
    email: '',
    education: '',
    experience: '',
  });

  const handleSubmit = async () => {
    try {
      // Save cvData to local storage
      await AsyncStorage.setItem('cvData', JSON.stringify(cvData));
      Alert.alert('Success', 'CV submitted successfully');
      navigation.navigate('Display'); // Navigate to the Display upon successful submission
    } catch (error) {
      console.error('Error saving CV data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={cvData.name}
          onChangeText={(text) => setCVData({ ...cvData, name: text })}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={cvData.email}
          onChangeText={(text) => setCVData({ ...cvData, email: text })}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Education</Text>
        <TextInput
          style={styles.input}
          value={cvData.education}
          onChangeText={(text) => setCVData({ ...cvData, education: text })}
          placeholder="Enter your education"
        />

        <Text style={styles.label}>Experience</Text>
        <TextInput
          style={styles.input}
          value={cvData.experience}
          onChangeText={(text) => setCVData({ ...cvData, experience: text })}
          placeholder="Enter your experience"
          multiline
        />

        <TouchableOpacity
          style={styles.customButton}
          onPress={handleSubmit}
        >
          <Text style={styles.customButtonText}>Submit CV</Text>
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

export default Form;
