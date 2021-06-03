import React from "react";
import { Text } from "react-native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			headerMode="none"
			screenOptions={{
				...TransitionPresets.ModalPresentationIOS,
			}}
		>
			<RestaurantStack.Screen
				name="Restaurants"
				component={RestaurantsScreen}
			/>

			<RestaurantStack.Screen
				name="RestaurantDetail"
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	);
};

export default RestaurantsNavigator;
