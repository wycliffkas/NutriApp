import React from "react";
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	Dimensions,
	TouchableWithoutFeedback
} from "react-native";
import { darkGrey100 } from "../styles/colors";

const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth * 0.2;

const Slider = ({ selectedItem, setSelectedItem }) => {
	const renderNumber = ({ item }) => {
		const isCurrent = item === selectedItem;
		return (
			<TouchableWithoutFeedback onPress={() => setSelectedItem(item)}>
				<View style={styles.itemContainer}>
					<View
						style={[
							styles.backgroundContainer,
							isCurrent && styles.selectedItemContainer
						]}>
						<Text
							style={[styles.itemText, isCurrent && styles.selectedItemText]}>
							{item}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	};

	return (
		<FlatList
			style={styles.flatList}
			horizontal
			data={Array.from({ length: 54 }, (_, index) => index + 17)}
			keyExtractor={(item) => item.toString()}
			renderItem={renderNumber}
			snapToInterval={itemWidth}
			decelerationRate="fast"
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.flatListContent}
		/>
	);
};

const styles = StyleSheet.create({
	flatList: {
		marginTop: 10
	},
	flatListContent: {
		alignItems: "center",
		justifyContent: "center"
	},
	itemContainer: {
		marginHorizontal: 10
	},
	backgroundContainer: {
		width: itemWidth,
		height: itemWidth,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: darkGrey100,
		borderRadius: 12
	},
	itemText: {
		fontSize: 24,
		color: "black"
	},
	selectedItemContainer: {
		width: itemWidth + 20,
		height: itemWidth + 20
	},
	selectedItemText: {
		fontSize: 32
	}
});

export default Slider;
