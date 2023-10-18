import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { darkGrey100 } from "../styles/colors";

import BodyTypeScreen from "../screens/login/BodyType";
import AgeScreen from "../screens/login/Age";
import ActivityLevelScreen from "../screens/login/ActivityLevel";
import HeightScreen from "../screens/login/Height";
import WeightScreen from "../screens/login/Weight";
import GenderScreen from "../screens/login/Gender";

const Stack = createStackNavigator();

const Login = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="BodyType"
				screenOptions={{
					headerStyle: {
						backgroundColor: darkGrey100,
						elevation: 5,
						shadowColor: "#000000",
						shadowOffset: { width: 0, height: 4 },
						shadowOpacity: 0.4,
						shadowRadius: 4
					},
					headerTintColor: "#000000",
					headerTitleStyle: {
						fontWeight: "bold"
					},
					headerTitleStyle: {
						display: "none"
					}
				}}>
				<Stack.Screen
					name="BodyType"
					component={BodyTypeScreen}
					options={({ navigation }) => ({
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{ marginLeft: 10 }}>
								<AntDesign name="arrowleft" size={24} color="black" />
							</TouchableOpacity>
						)
					})}
				/>
				<Stack.Screen
					name="Age"
					component={AgeScreen}
					options={({ navigation }) => ({
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{ marginLeft: 10 }}>
								<AntDesign name="arrowleft" size={24} color="black" />
							</TouchableOpacity>
						)
					})}
				/>
				<Stack.Screen
					name="ActivityLevel"
					component={ActivityLevelScreen}
					options={({ navigation }) => ({
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{ marginLeft: 10 }}>
								<AntDesign name="arrowleft" size={24} color="black" />
							</TouchableOpacity>
						)
					})}
				/>

				<Stack.Screen
					name="Height"
					component={HeightScreen}
					options={({ navigation }) => ({
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{ marginLeft: 10 }}>
								<AntDesign name="arrowleft" size={24} color="black" />
							</TouchableOpacity>
						)
					})}
				/>

				<Stack.Screen
					name="Weight"
					component={WeightScreen}
					options={({ navigation }) => ({
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{ marginLeft: 10 }}>
								<AntDesign name="arrowleft" size={24} color="black" />
							</TouchableOpacity>
						)
					})}
				/>
				<Stack.Screen
					name="Gender"
					component={GenderScreen}
					options={({ navigation }) => ({
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{ marginLeft: 10 }}>
								<AntDesign name="arrowleft" size={24} color="black" />
							</TouchableOpacity>
						)
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Login;
