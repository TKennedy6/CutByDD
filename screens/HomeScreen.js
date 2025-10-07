import { Text, View, Animated, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View>
      <Card style={styles.container}>
        <Card.Image source={require('../assets/DD-cutting.jpg')}
        style={{ width: "100%", height: 300, borderRadius: 0 }}
           />
      </Card>
      <Card>
        <Card.Title>Cuts by DD</Card.Title>
      </Card>
    <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",     
    backgroundColor: "#f0f0f0",
  },
  card: {
    width: 300,
    borderRadius: 10,
  },
});

export default HomeScreen