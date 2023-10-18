import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

import Select from "../../components/Select";
import { main } from "../../styles/main";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { AuthContext } from "../../context/AuthContext";

const Height = ({ navigation }) => {
	const [value, setValue] = useState(null);
	const [secondValue, setSecondValue] = useState(null);
	const [unit, setUnit] = useState("ft.-in.");
	const [units, setUnits] = useState([
		{ label: "Feets and inches", value: "ft.-in." },
		{ label: "Centimeters", value: "cm." },
		{ label: "Meters", value: "m." }
	]);

	const { userDetails, setUserDetails } = useContext(AuthContext);

	const showToast = () => {
		Toast.show({
			type: "info",
			text1: "Please fill in your height"
		});
	};

	const handleNext = () => {
		if (unit === "ft.-in." && (value === null || secondValue === null)) {
			showToast();
			return;
		} else if (unit !== "ft.-in." && value === null) {
			showToast();
			return;
		} else {
			const height =
				unit === "ft.-in." ? `${value}ft${secondValue}in` : `${value}${unit}`;
			setUserDetails({ ...userDetails, height });
			navigation.navigate("Weight");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={[main.title, styles.title]}>How tall are you?</Text>

			{unit === "ft.-in." ? (
				<View style={styles.inputWrapper}>
					<TextInput value={value} onChangeText={(value) => setValue(value)} />
					<Text style={styles.text}>ft.</Text>
					<TextInput
						value={secondValue}
						onChangeText={(value) => setSecondValue(value)}
					/>
					<Text style={styles.text}>in.</Text>
				</View>
			) : (
				<View style={styles.inputWrapper}>
					<TextInput value={value} onChangeText={(value) => setValue(value)} />
					<Text style={styles.text}>{unit}</Text>
				</View>
			)}

			<Select
				unit={unit}
				units={units}
				setUnit={setUnit}
				setUnits={setUnits}
				placeholder={"Feets and inches"}
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

export default Height;
