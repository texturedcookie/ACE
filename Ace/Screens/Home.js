import React,  { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavBar from '../Components/NavBar';
import ProfileButton from '../Components/ProfileButton';
import FriendsButton from '../Components/FriendsButton';
import AceContext, { AceProvider } from "../Context/AceContext";

const HomeScreen = ({ route, navigation }) => {
  const { users } = useContext(AceContext);

  const userId = route.params.userId;

  console.log(userId);
  console.log(users);
  let userInfo = [];

  for (let index = 0; index < users.length; index++) {
    console.log(users[index].id)
    if (users[index].id === userId) {
      userInfo = users[index]
    }
  }
  console.log(userInfo);

  return (
    <View style={styles.container}>
      <ProfileButton navigation={navigation}/>
      <FriendsButton navigation={navigation}/>
      <Text style={styles.title}>Welcome to ACE, {userInfo.name}!</Text>
      <Text> Your all in one study platform! Here you can find like minded indurviduals who want to Ace this semester just like you. Studying can be hard thats why we want to get to know you so we can help support you and your goals better.</Text>
      <Button
      style={styles.studyButton}
        title="Create Study Plan"
        onPress={() => navigation.navigate('Quiz')}
        color="purple"
      />
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

export default HomeScreen;
