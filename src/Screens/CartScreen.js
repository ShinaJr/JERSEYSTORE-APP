import { Text, View, Box, Center } from 'native-base'
import React from 'react'
import CartEmpty from '../Components/CartEmpty'
import Colors from '../colors'

function CartScreen() {
  return (
  <Box flex={1} safeAreaTop bg={Colors.white}>
  {/* Header */}
  <Center w="full" py={5}>
    <Text color={Colors.black} fontSize={20} bold>Cart</Text>
    </Center>
    {/* If Cart is Empty */}
    <CartEmpty/>
  </Box>
  
  )
}

export default CartScreen