import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AceProvider } from './Context/AceContext.js';
import HomeScreen from './Screens/Home';
import ProfileScreen from './Screens/Profile.js';
import FriendsScreen from './Screens/Friends.js';
import QuizScreen from './Screens/Quizs.js';
import StudyScreen from './Screens/Study.js';
import LoginScreen from './Screens/LoginScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <AceProvider>
        <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'ACE',
            }}
          />


          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'ACE',
            }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'ACE',
            }}
          />

          <Stack.Screen
            name="Friends"
            component={FriendsScreen}
            options={{
              title: 'ACE',
            }}
          />

          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{
              title: 'ACE',
            }}
          />
          
          <Stack.Screen
            name="Study"
            component={StudyScreen}
            options={{
              title: 'ACE',
            }}
          />

          
          
        </Stack.Navigator>
      </AceProvider>
    </NavigationContainer>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
