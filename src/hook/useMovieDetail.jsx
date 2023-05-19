import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'


const useMovieDetail = ({ id }) => {

    const [movieDetail, setmovieDetail] = useState({})
    const [actor, setactor] = useState([])
    const [loading, setloading] = useState(true)

    const getMovieDetail = async () => {    //Una funcion que me procese las llamadas
        await movieDB.get(`/${id}`).then( resp => setmovieDetail(resp.data))
        setloading(false)
    }

    const getMovieDetailCActor = async () => {
        await movieDB.get(`/${id}/credits`).then( resp => setactor(resp.data.cast))
        setloading(false)
    }

    useEffect(() => {
        getMovieDetail()  //Llamo esta funcion cuando inicia el componente
        getMovieDetailCActor()
    }, [])

  return {
    loading,
    ...movieDetail,
    actor
 }
}

export default useMovieDetail