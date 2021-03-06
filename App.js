import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastracture/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import { AppNavigator } from "./src/infrastracture/navigation/app.navigator";
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
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<AppNavigator />
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
