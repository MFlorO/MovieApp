import { ActivityIndicator, Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useMovie from '../../hook/useMovie';
import { FlatListMovie, GradianteFondo, PosterMovie } from '../../components';
import Carousel from 'react-native-snap-carousel';

const { width: windowsWidth } = Dimensions.get('window')


const HomeScreen = () => {

  const { loading, cine, popular, rated, upcoming } = useMovie()
  const { top } = useSafeAreaInsets()

  loading && <View style={styles.loading}><ActivityIndicator color='red' size={80}/></View> 

  return (
    <GradianteFondo>
    <ScrollView>
    <View style={{...styles.container, marginTop: top }}>

      <View style={styles.contenedorCarousel}>
      <Carousel
        data={cine}
        renderItem={({ item }) => <PosterMovie movie={item} borderRadius height={400} width={300}/>}
        sliderWidth={windowsWidth}
        itemWidth={300}
      />
      </View>

      <FlatListMovie titulo='Peliculas Populares' peliculas={popular} height={260} width={150}/>
      <FlatListMovie titulo='Peliculas Mejor Puntuadas' peliculas={rated} height={260} width={150}/>
      <FlatListMovie titulo='Próximos Extrenos' peliculas={upcoming} height={260} width={150}/>

    </View>
    </ScrollView>
    </GradianteFondo>
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
    padding: 4,
  },
  contenedorCarousel:{
    
  }
});
