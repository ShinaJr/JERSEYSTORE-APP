import { Text, View, ScrollView } from "native-base";
import React from "react";
import HomeProducts from "../Components/HomeProducts";
import HomeSearch from "../Components/HomeSearch";

function HomeScreen() {
  return (
    <View>
      <HomeSearch />
      <HomeProducts />
    </View>
  );
}

export default HomeScreen;
