import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, FlatList, ScrollView, Button, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import useMovieDetail from "../../hook/useMovieDetail";
import currencyFormatter from 'currency-formatter'
import { Actor } from "../../components/Actor";

const { height } = Dimensions.get('screen')


const DetailScreen = ({ route, navigation }) => {

  const movie = route.params;
  const { id, title, release_date } = movie

  const urlImg = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const { loading, genres, overview, actor, vote_average, budget } = useMovieDetail({id})
  
  return (
    <ScrollView style={styles.contenedor}>
      <Image source={{ uri: urlImg }} style={styles.imagen} />

      <View style={styles.subContenedor}>
        <Text style={styles.titleChico}>{title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={{ padding:20 }}>
        { loading ? <ActivityIndicator size={30} color='red' marginTop={20}/> :
        <>
        <Text style={styles.subtitle}>Fecha de lanzamiento: {release_date}</Text>
        <View style={{ flexDirection:'row', alignItems:'center', gap:8}}>
             <Ionicons name="star" size={15} color="black" />
             <Text style={styles.subtitle}>{vote_average}</Text>
        </View>
        <Text>Géneros: {genres.map( g => g.name).join(',')}</Text>
        <View style={{marginTop:4}}>
           <Text style={styles.title2}>HISTORIA</Text>
           <Text style={styles.subtitle}>{overview}</Text>
        </View>
        <View style={{marginTop:4}}>
           <Text style={styles.title2}>PRESUPUESTO</Text>
           <Text>{currencyFormatter.format(budget, {code:'USD'} )}</Text>
        </View>
        <View style={{marginTop:4, marginBottom: 20}}>
           <Text style={styles.title2}>ACTORES</Text>
           <FlatList 
            keyExtractor={ (item) => item.id.toString()}
            data={actor}
            renderItem={ ({ item }) => (<Actor actor={item}/>) }
            horizontal={true} //Forma del scroll
            showsHorizontalScrollIndicator={false} //Barra de scroll
           />
        </View>
        <Button title="VOLVER A LA CARTELERA" color={'black'} onPress={() => navigation.pop()}/>
        </>
       }
      </View>

      <TouchableOpacity onPress={() => navigation.pop()} style={styles.boton}>
        <Ionicons name="arrow-back-outline" color='white' size={45} />
      </TouchableOpacity>

    </ScrollView>
  )
}

export default DetailScreen;


const styles = StyleSheet.create({
  contenedor: {
    width:'100%',
    height: height 
  },
  imagen: {
    flex: 1,
    height: height * 0.7,
    marginBottom: 5
  },
  subContenedor:{
    alignItems:'center',
    justifyContent:'center'
  },
  titleChico:{
    fontSize: 25,
    color: 'grey'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 2
  },
  title2:{
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 2
  },
  subtitle:{
    fontSize: 15,
  },
  boton:{
    position: "absolute",
    top: 40,
    left: 6,
    zIndex: 5
  }
});
