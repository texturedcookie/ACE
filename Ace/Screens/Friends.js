
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavBar from '../Components/NavBar';
import ProfileButton from '../Components/ProfileButton';
import FriendsButton from '../Components/FriendsButton';

const FriendsScreen = ({ navigation }) => {
    const friends = [
              { name: 'John', age: 10 },
              { name: 'Chris', age: 15 },
              { name: 'Sally', age: 7 },
            ];
        
            function renderFriends() {
              const container = document.getElementById('friends-container');
              container.innerHTML = '';
        
              friends.forEach((friend) => {
                const div = document.createElement('div');
                div.classList.add('friend-container');
                div.innerHTML = `<strong>${friend.name}</strong> (age: ${friend.age})`;
                container.appendChild(div);
              });
            }
        
            document.getElementById('add-friend-button').addEventListener('click', () => {
              const name = prompt('Enter the name of the friend:');
              const age = prompt('Enter the age of the friend:');
        
              friends.push({ name, age });
              renderFriends();
            });
        
            renderFriends();
  return (
    <View style={styles.container}>
      <Text>Friends </Text>

    <View id="friends-container">
     {/* friends will be dynamically added here --> */}
    </View>

  <Button id="add-friend-button" class="add-friend-button">Add Friend</Button>


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

export default FriendsScreen;





// <!DOCTYPE html>
// <html>
// <head>
//  <title>Friends App</title>
//  <style>
//     body {
//       font-family: Arial, sans-serif;
//       background-color: #f5f5f5;
//     }

//     .friend-container {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 10px;
//       padding: 10px;
//       background-color: #fff;
//       border-radius: 5px;
//       box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//     }

//     .add-friend-button {
//       padding: 5px 10px;
//       background-color: #9c27b0;
//       color: white;
//       border: none;
//       cursor: pointer;
//       text-align: center;
//       text-decoration: none;
//       display: inline-block;
//       font-size: 16px;
//       margin: 4px 2px;
//       transition-duration: 0.4s;
//       border-radius: 5px;
//     }

//     .add-friend-button:hover {
//       background-color: #7b1fa2;
//     }
//  </style>
// </head>
// <body>
//  <h1>Friends App</h1>
//  <div id="friends-container">
//     <!-- friends will be dynamically added here -->
//  </div>
//  <button id="add-friend-button" class="add-friend-button">Add Friend</button>

//  <script>
//     const friends = [
//       { name: 'John', age: 10 },
//       { name: 'Chris', age: 15 },
//       { name: 'Sally', age: 7 },
//     ];

//     function renderFriends() {
//       const container = document.getElementById('friends-container');
//       container.innerHTML = '';

//       friends.forEach((friend) => {
//         const div = document.createElement('div');
//         div.classList.add('friend-container');
//         div.innerHTML = `<strong>${friend.name}</strong> (age: ${friend.age})`;
//         container.appendChild(div);
//       });
//     }

//     document.getElementById('add-friend-button').addEventListener('click', () => {
//       const name = prompt('Enter the name of the friend:');
//       const age = prompt('Enter the age of the friend:');

//       friends.push({ name, age });
//       renderFriends();
//     });

//     renderFriends();
//  </script>
// </body>
// </html>