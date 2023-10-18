import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

import { main } from "../../styles/main";
import OptionField from "../../components/OptionField";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";

const ActivityLevel = ({ navigation }) => {
	const [selected, setSelected] = useState(null);
	const [activityLevel, setActivityLevel] = useState(null);
	const { userDetails, setUserDetails } = useContext(AuthContext);

	const handleSelection = (index, value) => {
		setSelected(index === selected ? null : index);
		setActivityLevel(value);
	};


	const showToast = () => {
		Toast.show({
			type: "info",
			text1: "Please choose your activity level"
		});
	};

	const handleNext = () => {
		if (selected === null) {
			showToast();
			return;
		}
		setUserDetails({ ...userDetails, activityLevel });
		navigation.navigate("Height");
	};

	const activityLevels = [
		{
			id: 1,
			title: "Not very active",
			description: "Spend most of the time sitting"
		},
		{
			id: 2,
			title: "Lightly active",
			description: "Spend good part of your sitting"
		},
		{
			id: 3,
			title: "Active",
			description: "Spend good part of your day doing physical work"
		},
		{
			id: 4,
			title: "Very active",
			description: "Spend good part of the day doing heavy physical activity"
		}
	];

	return (
		<View style={styles.container}>
			<Text style={main.title}>What is your activity level?</Text>

			{activityLevels.map((item) => (
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
		marginHorizontal: 20
	}
});

export default ActivityLevel;
