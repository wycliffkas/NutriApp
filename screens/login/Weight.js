import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

import Select from "../../components/Select";
import { main } from "../../styles/main";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { AuthContext } from "../../context/AuthContext";

const Weight = ({ navigation }) => {
	const [weight, setWeight] = useState(null);
	const [unit, setUnit] = useState('kg');
	const [units, setUnits] = useState([
		{ label: "Kilogram", value: "kg" },
		{ label: "Pound", value: "lb" },
		{ label: "Gram", value: "g" }
	]);

	const { userDetails, setUserDetails } = useContext(AuthContext);

	const showToast = () => {
		Toast.show({
			type: "info",
			text1: "Please choose your weight"
		});
	};

	const handleNext = () => {
		if (weight === null) {
			showToast();
			return;
		}

		const weight = `${weight}${unit}`;
		setUserDetails({ ...userDetails, weight });
		navigation.navigate("Gender");
	};

	return (
		<View style={styles.container}>
			<Text style={[main.title, styles.title]}>How much do you weigh?</Text>

			<View style={styles.inputWrapper}>
				<TextInput value={weight} onChangeText={(value) => setWeight(value)} />
				<Text style={styles.text}>{unit}</Text>
			</View>

			<Select
				unit={unit}
				units={units}
				setUnit={setUnit}
				setUnits={setUnits}
				placeholder={"Kilogram"}
			/>

			<View style={styles.buttonWrapper}>
				<Button title="Next" onHandlePress={handleNext} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20
	},
	title: {
		marginTop: 160,
		marginBottom: 40,
		textAlign: "center"
	},
	inputWrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 20
	},
	text: {
		fontSize: 22,
		fontFamily: "CrimsonPro",
		marginRight: 10,
		marginLeft: 5
	},
	button: {
		position: "absolute",
		bottom: 80,
		width: "100%"
	},
	buttonWrapper: {
		marginTop: 340
	}
});

export default Weight;
