import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FromScreen = ({ navigation }) => {
  const [cvData, setCVData] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
  });

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('cvData', JSON.stringify(cvData));
      Alert.alert('Success', 'CV submitted successfully');
      navigation.navigate('DisplayScreen'); 
    } catch (error) {
      console.error('Error saving CV data:', error);
    }
  };

  return (
    <View style={styles.container}>
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

      <Button title="Submit CV" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default FromScreen;
