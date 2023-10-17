import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "../../components/Slider";
import Button from "../../components/Button";
import { main } from "../../styles/main";

const Age = ({ navigation}) => {
  const handleNext = () => {
    navigation.navigate('ActivityLevel')
  }

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={main.title}>What is your age?</Text>
			</View>
			<Slider />
			<View style={styles.button}>
				<Button title="Next" onHandlePress={handleNext}/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "relative",
		height: "100%",
		alignItems: "center"
	},
	contentContainer: {
		position: "absolute",
		top: "30%"
	},
	button: {
		position: "absolute",
		bottom: "10%",
		width: "80%"
	}
});

export default Age;
