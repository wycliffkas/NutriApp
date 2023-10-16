import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { main } from "../../styles/main";
import OptionField from "../../components/OptionField";
import Button from "../../components/Button";

const BodyType = ({ navigation }) => {
	const [selected, setSelected] = useState(null);

	const handleSelection = (index) => {
		setSelected(index === selected ? null : index);
	};

	const bodyTypes = [
		{
			id: 1,
			title: "Skinny.",
			description: "Underweight and low fat percentage."
		},
		{
			id: 2,
			title: "Skinny Fat.",
			description: "Skinny, but have loose fat."
		},
		{
			id: 3,
			title: "Athletic.",
			description: "Skinny, but have loose fat."
		},
		{
			id: 4,
			title: "Obese.",
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

			<Button title="Next" />
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
    marginHorizontal: 20,
	}
});

export default BodyType;
