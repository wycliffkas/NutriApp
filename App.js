import React, { useState, useEffect } from "react";
import { Text} from "react-native";
import LoginNavigation from "./navigation/login";
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'EBGaramond-Regular': require('./assets/fonts/EBGaramond-Regular.ttf'),
    'CrimsonPro': require('./assets/fonts/CrimsonPro.ttf'),
    'Roboto': require('./assets/fonts/Roboto.ttf'),
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

	return <LoginNavigation />;
}
