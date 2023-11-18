import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ACE!</Text>
      <Text> Your all in one study platform! Here you can find like minded indurviduals who want to Ace this semester just like you. Studying can be hard thats why we want to get to know you so we can help support you and your goals better.</Text>
      <Button
        title="Create Study Plan"
        onPress={() => navigation.navigate('Details')}
      />
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
});

export default HomeScreen;
