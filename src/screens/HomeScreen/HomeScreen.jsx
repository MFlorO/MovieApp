import { ActivityIndicator, Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useMovie from '../../hook/useMovie';
import { FlatListMovie, PosterMovie } from '../../components';


const { width: windowsWidth } = Dimensions.get('window')


const HomeScreen = () => {

  const { loading, cine, popular, rated, upcoming } = useMovie()
  const { top } = useSafeAreaInsets()

  loading && <View style={styles.loading}><ActivityIndicator color='red' size={80}/></View> 

  return (
    <ScrollView>
    <View style={{...styles.container, marginTop: top }}>

      <View style={styles.contenedorCarousel}>
        <FlatList
          keyExtractor={ (item) => item.id.toString()}
          data={cine}
          renderItem={ ({ item }) => <PosterMovie movie={item} borderRadius height={400} width={300}/> }
          sliderWidth={windowsWidth}
          itemWidth={300}
          horizontal={true} //Forma del scroll
          showsHorizontalScrollIndicator={false} //Barra de scroll
        />
      </View>

      <FlatListMovie titulo='Peliculas Populares' peliculas={popular} height={260} width={150}/>
      <FlatListMovie titulo='Peliculas Mejor Puntuadas' peliculas={rated} height={260} width={150}/>
      <FlatListMovie titulo='Próximos Extrenos' peliculas={upcoming} height={260} width={150}/>
      <FlatListMovie titulo='Peliculas Ciencia Ficción' peliculas={cine} height={260} width={150}/>

    </View>
    </ScrollView>
  )
}
export default HomeScreen;



const styles = StyleSheet.create({
  loading:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4,
  },
  contenedorCarousel:{
    
  }
});
