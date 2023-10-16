import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { darkGrey300 } from "../styles/colors"

const Button = ({title}) => {
	return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
    paddingVertical: 12,
		backgroundColor: darkGrey300,
		borderRadius: 12,
		color: "black",
    marginTop: 20
	},
  text: {
    color: 'black',
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 22,
  },
});

export default Button;