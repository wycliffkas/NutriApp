import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";
import Toast from "react-native-toast-message";

import { AuthProvider } from "./context/AuthContext";
import LoginNavigation from "./navigation/login";

const loadFonts = async () => {
	await Font.loadAsync({
		"EBGaramond-Regular": require("./assets/fonts/EBGaramond-Regular.ttf"),
		CrimsonPro: require("./assets/fonts/CrimsonPro.ttf"),
		Roboto: require("./assets/fonts/Roboto.ttf")
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		const loadCustomFonts = async () => {
			await loadFonts();
			setFontsLoaded(true);
		};
		loadCustomFonts();
	}, []);

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<>
			<AuthProvider>
				<LoginNavigation />
			</AuthProvider>
			<Toast />
		</>
	);
}
