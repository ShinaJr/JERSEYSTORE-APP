import { Button } from "native-base";
import React from "react";

function Buttons({ mt, bg, color, children, onPress }) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
        fontFamily: "body",
      }}
      _Pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default Buttons;
