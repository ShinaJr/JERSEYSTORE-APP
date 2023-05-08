import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import Colors from "../colors";
import Rating from "./Rating";
import Messages from "./Notifications/Messages";
import Buttons from "./Buttons";

const Review = () => {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={18} mb={2}>
        Review
      </Heading>
      {/* If there's no review */}
      <Messages
        color={Colors.tertiary}
        bg={Colors.deepGray}
        children={"NO REVIEW"}
        font={"Lato_700Bold"}
      />
      {/* Review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          John Smith
        </Heading>
        <Rating value={4.5} />
        <Text my={2} fontSize={11} fontFamily={"Lato_400Regular"}>
          May 15 2023
        </Text>
        <Messages
          color={Colors.black}
          bg={Colors.white}
          size={11.5}
          children={
            "The product was very good with a sleek design and actually very comfy"
          }
          font={"Lato_400Regular"}
        />
      </Box>
      {/* Write Review */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{ fontSize: "12px", fontFamily: "Lato_700Bold" }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subPurple2}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subPurple2,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ fontSize: "12px", fontFamily: "Lato_700Bold" }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This product is good ....."
              borderWidth={0}
              bg={Colors.subPurple2}
              py={4}
              _focus={{
                bg: Colors.subPurple2,
              }}
            />
          </FormControl>
          <Buttons bg={Colors.tertiary} color={Colors.white}>
            SUBMIT
          </Buttons>
          {/* If Not Login */}
          <Messages
            color={Colors.white}
            bg={Colors.black}
            size={13}
            children={"Please 'Login' to write a review..."}
            font={"Lato_700Bold"}
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
