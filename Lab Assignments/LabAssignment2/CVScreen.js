import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CVScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Muhammad Adnan Mushtaq</Text>
        <Text style={styles.subheader}>Software Engineer</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Contact Information</Text>
        <Text style={styles.sectionText}>Email: adnan@gmail.com</Text>
        <Text style={styles.sectionText}>Phone: +92 3479819662</Text>
        <Text style={styles.sectionText}>Address: Hamza Town , Attock City</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Education</Text>
        <Text style={styles.sectionText}>Bachelors in Software Engineering</Text>
        <Text style={styles.sectionText}>
          Comsats Institute of Information and Technology, Attock
        </Text>
        <Text style={styles.sectionText}>Graduated: Feb 2025</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Work Experience</Text>
        <Text style={styles.sectionText}>Frontend Developer</Text>
        <Text style={styles.sectionText}>NftCiper, Islamabad</Text>
        <Text style={styles.sectionText}>Duration: May 2022 - Present</Text>
        <Text style={styles.sectionText}>Responsibilities:</Text>
        <Text style={styles.sectionText}>
          - Frontend and UI development
        </Text>
        <Text style={styles.sectionText}>
          - Responsive Web Design
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Skills</Text>
        <Text style={styles.sectionText}>Programming Languages: JavaScript</Text>
        <Text style={styles.sectionText}>Frameworks: React</Text>
        <Text style={styles.sectionText}>Other Skills: Good Communication Skills</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Dark background color
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF', // Dodger Blue
  },
  subheader: {
    fontSize: 18,
    color: '#32CD32', // Lime Green
  },
  section: {
    backgroundColor: '#333', // Dark Gray
    padding: 15,
    marginBottom: 20,
    borderRadius: 15, // Rounder sections
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E90FF', // Dodger Blue
  },
  sectionText: {
    color: '#ADD8E6', // Light Blue
  },
});

export default CVScreen;
