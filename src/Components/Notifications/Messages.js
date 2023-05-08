import React from "react";
import { Center, Text } from "native-base";
const Messages = ({ bg, color, children, size, font }) => {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size} fontFamily={font}>
        {children}
      </Text>
    </Center>
  );
};

export default Messages;
