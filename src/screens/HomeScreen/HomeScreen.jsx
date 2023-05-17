import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
  
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='ir al detalle' onPress={() => navigation.navigate('DetailScreen') }/>
    </View>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
