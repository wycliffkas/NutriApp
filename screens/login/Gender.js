import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

import { main } from "../../styles/main";
import Button from "../../components/Button";
import { darkGrey300 } from "../../styles/colors";
import { AuthContext } from "../../context/AuthContext";

const Gender = ({ navigation }) => {
	const [gender, setGender] = useState(null);
	const [selected, setSelected] = useState(null);

	const { userDetails, setUserDetails } = useContext(AuthContext);


	const showToast = () => {
		Toast.show({
			type: "info",
			text1: "Please choose your gender"
		});
	};

	const handleNext = () => {
		if (gender === null) {
			showToast();
			return;
		}
		setUserDetails({ ...userDetails, gender });
	};

	const handleSelection = (index, item) => {
		setSelected(index === selected ? null : index);
		setGender(item);
	};

	const genderOptions = ["Male", "Female", "Others"];

	return (
		<View style={styles.container}>
			<Text style={[main.title, styles.title]}>
				How do you define yourself?
			</Text>

			{genderOptions.map((item, index) => (
				<TouchableOpacity
					style={[styles.item, index === selected && styles.focusedView]}
					onPress={() => handleSelection(index, item)}
					key={index}>
					<Text style={styles.label}>{item}</Text>
				</TouchableOpacity>
			))}

			<Button title="Next" onHandlePress={handleNext} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20
	},
	item: {
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "black",
		marginVertical: 20,
		padding: 20
	},
	label: {
		fontSize: 22,
		fontFamily: "CrimsonPro"
	},
	title: {
		marginTop: 90,
		marginBottom: 20
	},
	focusedView: {
		backgroundColor: darkGrey300
	}
});

export default Gender;
