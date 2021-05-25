import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfo from "../features/restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utility/safe-area-component";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { Search } from "../features/restaurants/components/search.component";
const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const RestaurantScreen = () => {
	const { isLoading, error, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			<Search />
			{isLoading ? (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ActivityIndicator
						animating={true}
						color={Colors.orange400}
						size={50}
					/>
				</View>
			) : (
				<RestaurantList
					data={restaurants}
					renderItem={({ item }) => {
						return (
							<Spacer position="bottom" size="large">
								<RestaurantInfo restaurant={item} />
							</Spacer>
						);
					}}
					keyExtractor={(item) => item?.name}
				/>
			)}
		</SafeArea>
	);
};

export default RestaurantScreen;
