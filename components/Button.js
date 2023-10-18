import React from "react";
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
	Dimensions
} from "react-native";
import { darkGrey300 } from "../styles/colors";

const Button = ({ title, onHandlePress }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={onHandlePress}>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 60,
		width: "100%",
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 12,
		backgroundColor: darkGrey300,
		borderRadius: 12,
		color: "black"
	},
	text: {
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 22
	}
});

export default Button;
