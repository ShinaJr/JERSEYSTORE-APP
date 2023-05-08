import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  Box,
  ScrollView,
  Heading,
  HStack,
  VStack,
  Spacer,
} from "native-base";
import React, { useState } from "react";
import Colors from "../colors";
import Rating from "../Components/Rating.js";
import NumericInput from "react-native-numeric-input";
import Buttons from "../Components/Buttons";
import Review from "../Components/Review";

function SingleProductScreen() {
  //Accessing the information/argument passed from the Home products component to the single product using the useRoute hook from react native
  // const route = useRoute();
  // const route.params.id = useRoute();
  //Now destructuring the route to pull the argument/info passed through
  const {
    params: {
      id,
      name,
      image,
      club,
      league,
      description,
      size,
      price,
      countInStock,
      rating,
      numReviews,
    },
  } = useRoute();
  //accessing the navigation object using the useNavigation hook
  const navigation = useNavigation();
  //setting state for the value of the numeric input
  const [value, setValue] = useState(0);
  return (
    // <View style={{ marginTop: 10, marginLeft: 10, justifyContent: "center" }}>
    //   <Image source={image} width={250} height={300} alt={name} />
    //   <Text>{name}</Text>
    //   <Text>{club}</Text>
    //   <Text>{league}</Text>
    //   <Text>{description}</Text>
    //   <Text>{size}</Text>
    //   <Text>{price}</Text>
    //   <Text>{countInStock}</Text>
    //   <Text>{numReviews}</Text>
    // </View>
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsHorizontalScrollIndicator={false}>
        <Image
          source={image}
          w="full"
          h={300}
          alt={name}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {name}
        </Heading>
        <Rating value={rating} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            step={1}
            minValue={0}
            maxValue={countInStock}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.tertiary}
            leftButtonBackgroundColor={Colors.tertiary}
          />
          <Spacer />
          <Heading>&#8358;{price.toLocaleString()}</Heading>
        </HStack>
        <Text
          lineHeight={24}
          fontSize={12}
          style={{
            fontFamily: "Lato_400Regular",
          }}
        >
          {description}
        </Text>
        <Buttons bg={Colors.tertiary} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttons>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
