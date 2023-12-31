import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

import { main } from "../../styles/main";
import OptionField from "../../components/OptionField";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";

const BodyType = ({ navigation }) => {
	const [bodyType, setBodyType] = useState(null);
	const [selected, setSelected] = useState(null);

	const { userDetails, setUserDetails } = useContext(AuthContext);

	const handleSelection = (index, value) => {
		setSelected(index === selected ? null : index);
		setBodyType(value);
	};

	const showToast = () => {
		Toast.show({
			type: "info",
			text1: "Please choose your body type"
		});
	};

	const handleNext = () => {
		if (selected === null) {
			showToast();
			return;
		}
		setUserDetails({ ...userDetails, bodyType });
		navigation.navigate("Age");
	};

	const bodyTypes = [
		{
			id: 1,
			title: "Skinny",
			description: "Underweight and low fat percentage."
		},
		{
			id: 2,
			title: "Skinny Fat",
			description: "Skinny, but have loose fat."
		},
		{
			id: 3,
			title: "Athletic",
			description: "Skinny, but have loose fat."
		},
		{
			id: 4,
			title: "Obese",
			description: "Extremely overweight and does not exercise."
		}
	];

	return (
		<View style={styles.container}>
			<Text style={main.title}>How would you describe your body type?</Text>

			{bodyTypes.map((item) => (
				<OptionField
					key={item.id}
					id={item.id}
					description={item.description}
					title={item.title}
					selected={selected}
					onHandleSelection={handleSelection}
				/>
			))}

			<Button title="Next" onHandlePress={handleNext} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
		marginHorizontal: 20,
	}
});

export default BodyType;
