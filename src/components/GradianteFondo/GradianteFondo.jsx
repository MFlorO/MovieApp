import { View, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';


const GradianteFondo = ({ children }) => {

  return  (
  <View style={{ flex:1, }}>
    <LinearGradient 
    colors={['black','white']} 
    style={{...StyleSheet.absoluteFillObject}}
    start={{x: 0.1, y: 0.1}}
    end={{x: 0.5, y: 0.7}}
    />
    { children }
  </View> 
 )
}
export default GradianteFondo;
