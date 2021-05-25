import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import RestaurantScreen from "./src/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastracture/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/components/utility/safe-area-component";
import { Ionicons } from "@expo/vector-icons";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Restaurants: "md-restaurant",
	Map: "md-map",
	Settings: "md-settings",
};

const Maps = () => (
	<SafeArea>
		<Text> Home </Text>
	</SafeArea>
);
const Settings = () => (
	<SafeArea>
		<Text> Settings </Text>
	</SafeArea>
);

const createScreenOptions = (route) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	};
};

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	restaurantsRequest();

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) =>
							createScreenOptions(route)
						}
						tabBarOptions={{
							activeTintColor: "tomato",
							inactiveTintColor: "gray",
						}}
					>
						<Tab.Screen
							name="Restaurants"
							component={RestaurantScreen}
						/>
						<Tab.Screen name="Map" component={Maps} />
						<Tab.Screen name="Settings" component={Settings} />
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
