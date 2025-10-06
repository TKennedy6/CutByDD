import HomeScreen from "./screens/HomeScreen";
import React from "react";
import { StyleSheet, View} from "react-native";
import Biography from "./screens/Biography";
import ContactInfo from "./screens/ContactInfo";
import Location from "./screens/Location";
import { SafeAreaView } from "react-native-safe-area-context";


function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
    <HomeScreen/>
    <Biography />
    <Location />
    <ContactInfo />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;


