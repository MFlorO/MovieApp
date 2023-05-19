import { View, Image, StyleSheet, Text } from "react-native"

const Actor = ({ actor }) => {
    const urlImg = `https://image.tmdb.org/t/p/w500${actor?.profile_path}`;
  return (
    <View style={styles.container}>
        {actor.profile_path && <Image source={{ uri:urlImg }} style={styles.containerImagen}/>}
        <View>
            <Text>{actor.name}</Text>
            <Text>{actor.character}</Text>
        </View>
    </View>
  )
}

export default Actor;


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius: 10,
        gap: 4
    },
    containerImagen: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    character:{
        fontSize: 16,
        color: 'grey'
    }
  });
  