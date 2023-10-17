import React, { useState } from "react";
import {
	View,
	TextInput,
	Text,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import { darkGrey300 } from "../styles/colors"


const OptionField = ({ description, title, id, selected, onHandleSelection }) => {

	const isFocused = id === selected;

	return (
		<TouchableOpacity
			onPress={() => onHandleSelection(id)}
			style={[styles.container, isFocused && styles.focusedView]}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		borderRadius: 13,
		borderWidth: 3,
		borderColor: "#545454",
		padding: 20
	},
	title: {
		fontSize: 22,
    fontFamily: "CrimsonPro"
	},
	description: {
		fontSize: 13,
    marginTop: 10,
    fontFamily: "Roboto"
	},
	focusedView: {
		backgroundColor: darkGrey300
	}
});

export default OptionField;
