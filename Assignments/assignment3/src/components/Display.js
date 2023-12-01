import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Display = () => {
  const [cvData, setCVData] = useState({});

  useEffect(() => {
    const fetchCVData = async () => {
      try {
        // Retrieve CV data from local storage
        const cvDataString = await AsyncStorage.getItem('cvData');
        if (cvDataString) {
          const parsedCVData = JSON.parse(cvDataString);
          setCVData(parsedCVData);
        }
      } catch (error) {
        console.error('Error fetching CV data:', error);
      }
    };

    fetchCVData();
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text>{cvData.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text>{cvData.email}</Text>

      <Text style={styles.label}>Education:</Text>
      <Text>{cvData.education}</Text>

      <Text style={styles.label}>Experience:</Text>
      <Text>{cvData.experience}</Text>
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
    fontWeight: 'bold',
  },
});

export default Display;
