import { FlatList, Text, View, StyleSheet } from 'react-native';
import { PosterMovie } from '../PosterMovie';

const FlatListMovie = ({ titulo, peliculas, height, width }) => {
  return (
    <View style={styles.contenedor}>
       <Text style={styles.texto}>{titulo}</Text>
       <FlatList 
        keyExtractor={ (item) => item.id.toString()}
        data={peliculas}
        renderItem={ ({ item }) => (<PosterMovie movie={item} height={height} width={width}/>) }
        horizontal={true} //Forma del scroll
        showsHorizontalScrollIndicator={false} //Barra de scroll
       />
  </View>
  )
}
export default FlatListMovie;


const styles = StyleSheet.create({
    contenedor:{
        marginTop: 20
    },
    texto:{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    }
});
  