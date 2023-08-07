import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

import StackNavigation from "./src/Navigations/StackNavigation";
import CartScreen from "./src/Screens/CartScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
  });
  if (!fontsLoaded) {
    return;
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <NotVerifyScreen /> */}
        {/* <HomeScreen/> */}
        {/* <StackNavigation /> */}
        <CartScreen/>
        {/* <SingleProductScreen /> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
