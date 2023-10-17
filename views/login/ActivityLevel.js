import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { main } from "../../styles/main";
import OptionField from "../../components/OptionField";
import Button from "../../components/Button";

const ActivityLevel = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

	const handleSelection = (index) => {
		setSelected(index === selected ? null : index);
	};

  const handleNext = () => {
    navigation.navigate('Height')
  }

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
			<Text style={main.title}>How would you describe your body type?</Text>

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
		marginHorizontal: 20
	}
});

export default ActivityLevel;
