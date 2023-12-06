
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NavBar = (props) => {
  return (
    
    // <View style={styles.navposition}>
    <View style={styles.container}>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')} color="white"/>
      <Button title="Study" onPress={() => props.navigation.navigate('Study')} color="white"/>
      <Button title="Plans" onPress={() => props.navigation.navigate('Plans')} color="white"/>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
     position: 'absolute',
     bottom: 0,
     left: 0,
    right: 0,
    borderWidth: 1, // Add border styling
    borderColor: 'white', // Change border color as needed
    backgroundColor: 'purple',
  },
  // navposition:{
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'baseline',
  // }

});

export default NavBar;
