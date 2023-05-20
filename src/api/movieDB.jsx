import axios from 'axios';
import { api_key } from '../env';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params: {
        api_key: api_key,
        languages: 'es-ES',
        accept: 'application/json'
    }
})

export default movieDB;