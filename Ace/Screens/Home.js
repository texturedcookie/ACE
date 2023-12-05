import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavBar from '../Components/NavBar';
import ProfileButton from '../Components/ProfileButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProfileButton navigation={navigation}/>
      <Text style={styles.title}>Welcome to ACE!</Text>
      <Text> Your all in one study platform! Here you can find like minded indurviduals who want to Ace this semester just like you. Studying can be hard thats why we want to get to know you so we can help support you and your goals better.</Text>
      <Button
      style={styles.studyButton}
        title="Create Study Plan"
        onPress={() => navigation.navigate('Details')}
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
