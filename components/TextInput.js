import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 16,
    marginBottom: 20,
    width: 37
  },
});

export default Input;
