import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library you prefer

const OptionsComponent = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          text={option}
          isSelected={selectedOption === option}
          onSelect={() => onSelect(option)}
        />
      ))}
    </View>
  );
};

const OptionItem = ({ text, isSelected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.optionContainer}>
      <Text>{text}</Text>
      {isSelected && <Ionicons name="checkmark" size={20} color="green" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default OptionsComponent;
