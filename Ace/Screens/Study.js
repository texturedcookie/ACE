import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavBar from '../Components/NavBar';
import ProfileButton from '../Components/ProfileButton';
import FriendsButton from '../Components/FriendsButton';

const StudyScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ProfileButton navigation={navigation}/>
      <FriendsButton navigation={navigation}/>
      <Text style={styles.title}>Study plans</Text>
      
      <NavBar navigation={navigation}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  studyButton: {
    backgroundColor: 'purple'
  }
});

export default StudyScreen;
