import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Select = (props) => {
	const { units, setUnits, setUnit, unit, placeholder } = props;
	const [open, setOpen] = useState(false);
	return (
		<View style={styles.container}>
			<DropDownPicker
				open={open}
				value={unit}
				items={units}
				setOpen={setOpen}
				setValue={setUnit}
				setItems={setUnits}
				placeholder={placeholder}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	},
	label: {
		fontFamily: "CrimsonPro",
		fontSize: 200
	}
});

export default Select;
