import { Box, HStack, Input, Pressable } from "native-base";
import React from "react";
import Colors from "../colors";
import { MaterialIcons } from '@expo/vector-icons';

function HomeSearch() {
  return (
    <HStack
    space={3}
      w="full"
      px={6}
      bg={Colors.tertiary}
      py={4}
      alignItems="center"
      safeAreaTop
    >
        <Input 
            placeholder="Chelsea, Barcelona, Lille, Dortmund ..."
            w="85%"
            bg={Colors.white}
            type="search"
            variant="filled"
            h={12}
            borderWidth={0}
            fontFamily="Lato_400Regular"
            _focus={{bg: Colors.white}}
        />
        <Pressable ml={3}>
        <MaterialIcons name="shopping-basket" size={24} color={Colors.white}/>
        <Box px={1} rounded="full" position="absolute" top={-13} left={2} bg={Colors.orange} _text={{color: Colors.dark1, fontSize: "11px", fontFamily:"Lato_700Bold"}}>5</Box>
        </Pressable>

    </HStack>
  );
}

export default HomeSearch;
