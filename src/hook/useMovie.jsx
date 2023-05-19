import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';



const useMovie = () => {

    const [movie, setmovie] = useState(null)
    const [loading, setloading] = useState(true)

    const getMovies = async () => {    //Una funcion que me procese las llamadas

        const promiseCine = movieDB.get('/now_playing');
        const promisePopular = movieDB.get('/popular');
        const promiseRated = movieDB.get('/top_rated');
        const promiseUpComing = movieDB.get('/upcoming');

        const resp = await Promise.all([promiseCine, promisePopular, promiseRated, promiseUpComing])

        setmovie({
            cine: resp[0].data.results,
            popular: resp[1].data.results,
            rated: resp[2].data.results,
            upcoming: resp[3].data.results
        })

        setloading(false)
    }
    

    useEffect(() => {
        getMovies()  //Llamo esta funcion cuando inicia el componente
    }, [])

  return {
    loading,
    ...movie
 }
}

export default useMovie