import React, { useState } from "react";
import { FlatList, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../features/restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utility/safe-area-component";
const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

const RestaurantScreen = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const onChangeSearch = (query) => setSearchQuery(query);
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar
					placeholder="Search"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</SearchContainer>

			<RestaurantList
				data={[
					{ name: "1" },
					{ name: "2" },
					{ name: "3" },
					{ name: "4" },
					{ name: "5" },
				]}
				renderItem={() => (
					<Spacer position="bottom" size="large">
						<RestaurantInfo />
					</Spacer>
				)}
				keyExtractor={(item) => item?.name}
			/>
		</SafeArea>
	);
};

export default RestaurantScreen;
