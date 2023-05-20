import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core'


const PosterMovie = ({ movie, borderRadius,  height, width }) => {
  
  const urlImg = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={{ marginHorizontal: 5, width:width, height:height}} 
    activeOpacity={0.5}
    onPress={() => navigation.navigate('DetailScreen', movie)} //El segundo argumento es lo que mando
    >
      <View style={styles.contenedorImagen}>
        <Image source={{ uri: urlImg }} style={{...styles.imagen, borderRadius: borderRadius && 20}} />
      </View>
    </TouchableOpacity>
  );
};

export default PosterMovie;



const styles = StyleSheet.create({
  contenedorImagen: {
    flex: 1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 4,
    shadowRadius: 7,
    elevation: 10
  },
  imagen: {
    flex: 1
  },
});
