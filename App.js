import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantScreen from "./src/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastracture/theme";

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
	return (
		<>
			<ThemeProvider theme={theme}>
				<RestaurantScreen />
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
