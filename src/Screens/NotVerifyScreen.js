import { Box, Center, Image, Text, View, VStack } from "native-base";
import React from "react";
import Colors from "../colors";
import Buttons from "../Components/Buttons";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.tertiary} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/favicon.png")}
          alt="Logo"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttons bg={Colors.dark1} color={Colors.white}>REGISTER</Buttons>
        <Buttons  bg={Colors.white} color={Colors.black}>LOGIN</Buttons>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
