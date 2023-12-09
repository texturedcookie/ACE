import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavBar from '../Components/NavBar';
import ProfileButton from '../Components/ProfileButton';
import FriendsButton from '../Components/FriendsButton';
import OptionsComponent from '../Components/OptionsComponent';

const QuizScreen = ({ navigation }) => {
    const subjects = ["Bio", "Chem", "Math"];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    
    };


    const learningStyle = ["Visual", "Auditory", "Tactile"];
    const [selectedLearning, setSelectedLearning] = useState(null);
    const handleLearningSelect = (option) => {
      setSelectedLearning(option);

    };


  return (
    <View style={styles.container}>
      {/* <ProfileButton navigation={navigation}/>
      <FriendsButton navigation={navigation}/> */}
      <Text style={styles.title}>What subject would you like a customized study plan for?</Text>
      <OptionsComponent options={subjects}  selectedOption={selectedOption} onSelect={handleOptionSelect}/>
      <Text style={styles.title}>What kind of learner are you?</Text>
      <OptionsComponent options={learningStyle}  selectedOption={selectedLearning} onSelect={handleLearningSelect}/>

      <Button
      style={styles.studyButton}
        title="I'm feeling motivated"
        onPress={() => navigation.navigate('Study', { userId: user.id })}
        color="purple"
      />
      {/* <NavBar navigation={navigation}/> */}

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

export default QuizScreen;
