import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const achievementsData = [
  { id: '1', title: 'Study Streak', description: 'Consecutive days of study' },
  { id: '2', title: 'Quiz Master', description: 'Scored high in quizzes'},
  // Add more achievements as needed
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('./icons/profile.png')} style={styles.profileImage} /> */}
        <Text style={styles.username}>John Doe</Text>
      </View>

      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <FlatList
          data={achievementsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.achievementItem}>
              <Image source={item.icon} style={styles.achievementIcon} />
              <View>
                <Text style={styles.achievementTitle}>{item.title}</Text>
                <Text style={styles.achievementDescription}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  achievementsContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileScreen;
