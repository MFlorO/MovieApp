import DetailScreen from "../screens/DetailScreen/DetailScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const NavigationScreen = () => {
  return (
  <Stack.Navigator
   screenOptions={{
    headerShown: false
   }}
  >
    <Stack.Screen name="HomeScreen" options={{title:'Home'}} component={HomeScreen} />
    <Stack.Screen name="DetailScreen" options={{title:'Details'}} component={DetailScreen} />
  </Stack.Navigator>
  )
}
export default NavigationScreen;


