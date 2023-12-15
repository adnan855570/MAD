import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/components/RegistrationScreen'
import LoginScreen from './src/components/LoginScreen'
import FromScreen from './src/components/FromScreen'
import DisplayScreen from './src/components/DisplayScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="FromScreen" component={FromScreen} />
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
