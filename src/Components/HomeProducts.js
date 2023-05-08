import {
  Flex,
  Text,
  ScrollView,
  Pressable,
  Image,
  Box,
  Heading,
} from "native-base";
import React from "react";
import Products from "../data/Products.js";
import Colors from "../colors";
import Rating from "./Rating.js";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} mb={100}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {/* Using the Map function to render the products on the screen */}
        {Products.map((product, id) => (
          <Pressable
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            onPress={() =>
              navigation.navigate("SingleProduct", {
                id: product.id,
                name: product.name,
                image: product.Image,
                club: product.club,
                league: product.league,
                description: product.description,
                size: product.size,
                price: product.price,
                countInStock: product.countInStock,
                rating: product.rating,
                numReviews: product.numReviews,
              })
            }
          >
            <Image
              source={product.Image}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                &#8358;{product.price.toLocaleString()}
              </Heading>
              <Text
                style={{
                  fontFamily: "Lato_400Regular",
                  fontSize: 11,
                  marginTop: 1,
                }}
                w="full"
                isTruncated
              >
                {product.name}
              </Text>
              {/* Product Rating */}
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
