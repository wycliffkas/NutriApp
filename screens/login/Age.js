import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import Slider from "../../components/Slider";
import Button from "../../components/Button";
import { main } from "../../styles/main";
import { AuthContext } from "../../context/AuthContext";

const Age = ({ navigation }) => {
	const [age, setAge] = useState(null);

	const { userDetails, setUserDetails } = useContext(AuthContext);

	const showToast = () => {
		Toast.show({
			type: "info",
			text1: "Please choose your age"
		});
	};

	const handleNext = () => {
		if (age === null) {
			showToast();
			return;
		}
		setUserDetails({ ...userDetails, age });
		navigation.navigate("ActivityLevel");
	};

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={main.title}>What is your age?</Text>
			</View>
			<Slider selectedItem={age} setSelectedItem={setAge} />
			<View style={styles.button}>
				<Button title="Next" onHandlePress={handleNext} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	},
	contentContainer: {
		position: "absolute",
		top: "30%"
	},
	button: {
    alignItems: "center",
    marginHorizontal: 20
  }
});

export default Age;
