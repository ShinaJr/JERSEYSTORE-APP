import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Center, List, Icon, Link } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

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
    // <View style={styles.container}>
    //   <Text style={{ fontFamily: "Lato_700Bold", fontSize:30 }}>Jersey Store App</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NativeBaseProvider>
      <SafeAreaView flex={1} alignItems="center" justifyContent="center">
        <Box bg="primary.400" p="12" rounded="lg">
          <Text style={{ fontFamily: "Lato_700Bold", fontSize: 30 }}>
            Jersey Store App
          </Text>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
