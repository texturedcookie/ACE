import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const FriendsButton = (props) => {
  return (
    
    // <View style={styles.navposition}>
    <View style={styles.container}>
      <Button 
      title="Friends" 
      onPress={() => props.navigation.navigate('Profile')}
      color="white"
      />

    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 0, // You can adjust the margin for spacing
        borderWidth: 1, // Add border styling
        borderColor: 'white',
        backgroundColor: 'purple', // Change border color as needed
      },
  // navposition:{
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'baseline',
  // }

});

export default FriendsButton;
