import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../colors";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

function RegisterScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="-1"
        px="145"
        justifyContent="center"
      >
        <Heading size="md">SIGN UP</Heading>
        <VStack space={5} pt="-10" ml="-20" mt="5">
          {/* username */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.tertiary} />
            }
            variant="underlined"
            type="text"
            placeholder="username"
            fontFamily="Lato_400Regular"
            w="150%"
            pl={2}
            color={Colors.tertiary}
            borderBottomColor={Colors.deepestGray}
          />
          {/* email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.tertiary} />
            }
            variant="underlined"
            type="email"
            placeholder="user@gmail.com"
            fontFamily="Lato_400Regular"
            w="150%"
            pl={2}
            color={Colors.tertiary}
            borderBottomColor={Colors.deepestGray}
          />
          {/* password */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.tertiary} />
            }
            variant="underlined"
            placeholder="input password"
            fontFamily="Lato_400Regular"
            type="password"
            w="150%"
            pl={2}
            color={Colors.tertiary}
            borderBottomColor={Colors.deepestGray}
          />
        </VStack>
        <Button
          _pressed={{ bg: Colors.tertiary }}
          mt={45}
          w="110%"
          rounded={50}
          bg={Colors.tertiary}
        >
          SIGN UP
        </Button>
        <Pressable mt={5} ml={5}>
          <Text color={Colors.dark2} fontFamily="Lato_700Bold">
            LOGIN
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
