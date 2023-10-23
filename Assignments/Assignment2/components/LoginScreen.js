import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library of your choice

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          source={require('../src/images/leaves.jpg')}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.linksContainer}>
          <View style={styles.link}>
            <Icon name="key" size={18} color="black" style={styles.icon} />
            <Text style={styles.linkText}>Forgot Password?</Text>
          </View>
          <View style={styles.link}>
            <Icon name="user-plus" size={18} color="black" style={styles.icon} />
            <Text style={styles.linkText}>Create your Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    position: 'relative',
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: windowWidth, // Use the screen width
    height: windowHeight, // Use the screen height
    resizeMode: 'cover',
  },
  inputContainer: {
    position: 'absolute',
    top: windowHeight / 2 - 120, // Centered vertically
    left: windowWidth / 2 - 120, // Centered horizontally
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 20,
  },
  loginButton: {
    backgroundColor: 'orange',
    width: 250,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: windowWidth / 2 - 125,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  linksContainer: {
    flexDirection: 'column',
    marginTop: 50,
    marginLeft: windowWidth / 2 - 80,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
    color: 'green',
  },
  linkText: {
    color: 'green',
    fontSize: 16,
  },
});

export default LoginScreen;
